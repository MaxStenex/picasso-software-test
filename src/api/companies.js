export const fetchCompanies = async ({ name }) => {
  const response = await fetch(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`
  );
  return await response.json();
};
