export const productsFetchApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error();
    }
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error || "please check your internet");
  }
};
