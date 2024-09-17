// dataService.js

import { checkServerAvailability } from "./Fetch/checkAvabilityServer";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";
import { fetchDataUser, fetchDataUserActivity, fetchDataUserAverageSessions, fetchDataUserPerformance } from "./Fetch/fetchDataUser";

export const getData = async (id) => {
    const showErrorMessage = (message) => {
  alert(message);
};
  const url = "http://localhost:3000";
  const serverAvailable = await checkServerAvailability(url);

  if (serverAvailable) {
    try {
      const [user, activity, averageSessions, performance] = await Promise.all([
        fetchDataUser(id),
        fetchDataUserActivity(id),
        fetchDataUserAverageSessions(id),
        fetchDataUserPerformance(id),
      ]);

      return {
        dataUser: user,
        dataActivity: activity,
        dataAverageSessions: averageSessions,
        dataPerformance: performance,
        isMock: false,
      };
    } catch (error) {
      console.error("Erreur lors de la tentative de connexion au serveur:console.error", error);
      return getMockData(id);
    }
  } else {
    showErrorMessage("Le serveur est actuellement inaccessible. Vous êtes temporairement en mode hors ligne. Nous nous excusons pour la gêne occasionnée.");
    return getMockData(id);
  }
};

const getMockData = (id) => {
  return {
    dataUser: USER_MAIN_DATA.find((user) => user.id === id),
    dataActivity: USER_ACTIVITY.find((activity) => activity.userId === id),
    dataAverageSessions: USER_AVERAGE_SESSIONS.find((session) => session.userId === id),
    dataPerformance: USER_PERFORMANCE.find((performance) => performance.userId === id),
    isMock: true,
  };
};
