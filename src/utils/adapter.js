
export const adaptCounterInfos = (data, isMock) => {
    return isMock ? data.keyData : data.data.keyData;
  };
  
export const adaptSessions = (data, isMock) => {
    return isMock ? data.sessions : data.data.sessions;
  };

export const adaptScore = (data, isMock) => {
  if (isMock) {
    return data.todayScore ?? data.score;
  } else {
    return data.data.todayScore ?? data.data.score;
  }
};
  