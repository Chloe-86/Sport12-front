
export const adaptCounterInfos = (data, isMock) => {
    return isMock ? data.keyData : data.data.keyData;
  };
  
export const adaptSessions = (data, isMock) => {
    return isMock ? data.sessions : data.data.sessions;
  };

export const adaptScore = (data, isMock, id) => {
    if (isMock) {
      return id === 12 ? data.todayScore : data.score;
    } else {
      return id === 12 ? data.data.todayScore : data.data.score;
    }
  };
  