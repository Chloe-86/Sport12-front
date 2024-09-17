const url = "http://localhost:3000";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data/data";

export const fetchDataUser = async (id) => {
  try {
    const response = await fetch(`${url}/user/${id}`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données utilisateur");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur:", error);
    return {dataUser: USER_MAIN_DATA.find((user) => user.id === id), isMock: true, error} 
  }
};

export const fetchDataUserActivity = async (id) => {
  try {
    const response = await fetch(`${url}/user/${id}/activity`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données d'activité");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'activité:", error);
   return {
      dataActivity: USER_ACTIVITY.find((activity) => activity.userId === id), isMock: true, error}
  }
};

export const fetchDataUserAverageSessions = async (id) => {
  try {
    const response = await fetch(`${url}/user/${id}/average-sessions`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données de sessions moyennes");
    return await response.json();
  } catch (error) {
    
    console.error("Erreur lors de la récupération des données de sessions moyennes:", error);
    return {dataAverageSessions: USER_AVERAGE_SESSIONS.find((session) => session.userId === id), isMock: true, error}
  }
};

export const fetchDataUserPerformance = async (id) => {
  try {
    const response = await fetch(`${url}/user/${id}/performance`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données de performance");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de performance:", error);
    return {dataPerformance: USER_PERFORMANCE.find((performance) => performance.userId === id), isMock: true, error};
  }
};
