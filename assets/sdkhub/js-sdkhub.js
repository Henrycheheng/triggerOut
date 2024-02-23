(function () {
  let _global = globalThis || window;
  _global.sdkhub = _global.sdkhub || {};
  let PluginType = {
    kPluginCustom: 1,
    kPluginUser: 2,
    kPluginFee: 4,
    kPluginAds: 8,
    kPluginPush: 16,
  };

  let CustomResultCode = {
    kCustomExtension: 10000
  };

  let UserResultCode = {
    kInitSucceed: 0,
    kInitFailed: 1,
    kLoginSucceed: 2,
    kLoginNetworkError: 3,
    kLoginNoNeed: 4,
    kLoginFailed: 5,
    kLoginCancel: 6,
    kLogoutSucceed: 7,
    kLogoutFailed: 8,
    kPlatformEnter: 9,
    kPlatformBack: 10,
    kPausePage: 11,
    kExitPage: 12,
    kAntiAddictionQuery: 13,
    kRealNameRegister: 14,
    kAccountSwitchSucceed: 15,
    kAccountSwitchFailed: 16,
    kOpenShop: 17,
    kAccountSwitchCancel: 18,
    kGameExitPage: 19,
    kScoreSubmitSucceed: 20,
    kScoreSubmitFailed: 21,
    kAchUnlockSucceed: 22,
    kAchUnlockFailed: 23,
    kShowLeaderBoardSucceed: 24,
    kShowLeaderBoardFailed: 25,
    kShowAchievementSucceed: 26,
    kShowAchievementFailed: 27,
    kServerVerify: 28,
    kUserExtension: 20000
  };

  let ToolBarPlace = {
    kToolBarTopLeft: 1,
    kToolBarTopRight: 2,
    kToolBarMidLeft: 3,
    kToolBarMidRight: 4,
    kToolBarBottomLeft: 5,
    kToolBarBottomRight: 6
  };

  let FeeResultCode = {
    kFeeSucceed: 0,
    kFeeFailed: 1,
    kFeeCancel: 2,
    kFeeNetworkError: 3,
    kFeeProductionInforIncomplete: 4,
    kFeeInitSucceed: 5,
    kFeeInitFailed: 6,
    kFeeNowPaying: 7,
    kFeeRechargeSucceed: 8,
    kFeeExtension: 30000,
  };

  let AdsResultCode = {
    kAdsReceived: 0,
    kAdsShown: 1,
    kAdsDismissed: 2,
    kPointsSpendSucceed: 3,
    kPointsSpendFailed: 4,
    kNetworkError: 5,
    kUnknownError: 6,
    kOfferWallOnPointsChanged: 7,
    kRewardedVideoWithReward: 8,
    kFeeFinished: 9,
    kAdsClicked: 10,
    kAdsFailed: 11,
    kAdsPreloadFailed: 12,
    kAdsShownFailed: 13,
    kAdsRetryPreload: 14,
    kAdsOnLeave: 15,
    kAdsOnAdImpression: 16,
    kAdsExtension: 40000
  };

  let AdsPos = {
    kPosBottom: 0,
    kPosCenter: 1,
    kPosTop: 2,
  };

  let PushResultCode = {
    kPushReceiveMessage: 0,
    kStartPushSucceed: 1,
    kStartPushFailed: 2,
    kClosePushSucceed: 3,
    kClosePushFailed: 4,
    kSetAliasSucceed: 5,
    kSetAliasFailed: 6,
    kDelAliasSucceed: 7,
    kDelAliasFailed: 8,
    kSetTagsSucceed: 9,
    kSetTagsFailed: 10,
    kDelTagSucceed: 11,
    kDelTagsFailed: 12,
    kPushExtension: 50000
  };

  sdkhub.PluginType = PluginType;
  sdkhub.CustomResultCode = CustomResultCode;
  sdkhub.UserResultCode = UserResultCode;
  sdkhub.ToolBarPlace = ToolBarPlace;
  sdkhub.FeeResultCode = FeeResultCode;
  sdkhub.AdsResultCode = AdsResultCode;
  sdkhub.AdsPos = AdsPos;
  sdkhub.PushResultCode = PushResultCode;
  sdkhub.getCustomPlugins = () => [];
  sdkhub.getUserPlugins = () => [];
  sdkhub.getFeePlugins = () => [];
  sdkhub.getCustomPlugin = (pluginId = '') => null;
  sdkhub.getUserPlugin = (pluginId = '') => null;
  sdkhub.getFeePlugin = (pluginId = '') => null;
  sdkhub.getAdsPlugin = () => null;
  sdkhub.getPushPlugin = () => null;
  sdkhub.getFrameworkVersion = () => "";
  sdkhub.getPluginMethods = (plugin) => "";
  sdkhub.getSupportPluginIds = () => "";
  sdkhub.getChannelId = () => "";
  if (typeof SDKHub === 'undefined') return;
  sdkhub.getCustomPlugins = () => SDKHub.AgentManager.getInstance().getCustomPlugins();
  sdkhub.getUserPlugins = () => SDKHub.AgentManager.getInstance().getUserPlugins();
  sdkhub.getFeePlugins = () => SDKHub.AgentManager.getInstance().getFeePlugins();
  sdkhub.getCustomPlugin = (pluginId = '') => SDKHub.AgentManager.getInstance().getCustomPlugin(pluginId || "");
  sdkhub.getUserPlugin = (pluginId = '') => SDKHub.AgentManager.getInstance().getUserPlugin(pluginId || "");
  sdkhub.getFeePlugin = (pluginId = '') => SDKHub.AgentManager.getInstance().getFeePlugin(pluginId || "");
  sdkhub.getAdsPlugin = () => SDKHub.AgentManager.getInstance().getAdsPlugin();
  sdkhub.getPushPlugin = () => SDKHub.AgentManager.getInstance().getPushPlugin();
  sdkhub.getFrameworkVersion = () => SDKHub.AgentManager.getInstance().getFrameworkVersion();
  sdkhub.getPluginMethods = (plugin) => SDKHub.AgentManager.getInstance().getPluginMethods(plugin);
  sdkhub.getSupportPluginIds = () => SDKHub.AgentManager.getInstance().getSupportPluginIds();
  sdkhub.getChannelId = () => SDKHub.AgentManager.getInstance().getChannelId();
})();