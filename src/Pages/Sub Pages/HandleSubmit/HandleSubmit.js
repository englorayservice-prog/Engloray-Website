export const submitEnrollment = async (payload) => {
  const response = await fetch(
    "https://localhost:8081/api/courseform/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return await response.json();
};
