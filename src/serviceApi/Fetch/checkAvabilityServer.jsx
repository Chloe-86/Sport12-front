export const checkServerAvailability = async (url) => {
  try {
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Serveur inaccessible : ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error("Basculement vers les données mockés", error.message);
    return false;
  }
};
