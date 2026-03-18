export const submitInternship = async (payload) => {
  const response = await fetch(
    "https://localhost:8081/api/internshipform/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return await response.json();
};
