const getLoggedInStatus = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getRefreshedStatus = (state) => state.auth.refreshing;

const authSelectors = {
  getLoggedInStatus,
  getUserName,
  getRefreshedStatus,
};

export default authSelectors;
