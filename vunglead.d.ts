declare namespace vungle {
    export namespace JSB {
        function fullClassName(sampleClassName: string): string;
        function callNativeMethod(className: string, methodName: string, ...parameters: any): any;
        function isAndroid(): boolean;
        function isIOS(): boolean;
    }
    /**
     * @en
     * SDK initialization Callbacks
     * @zh
     * SDK初始化回调
     */
    type InitCallback = {
        /**
         * @en
         * SDK has successfully initialized
         * @zh
         * SDK初始化成功
         */
        onSuccess?: () => void;
        /**
         * @en
         * SDK has failed to initialize
         * @zh
         * SDK初始化失败
         */
        onError?: (error: string) => void;
    };
    /**
     * @en
     * Ads Load Callbacks
     * @zh
     * 广告加载回调
     */
    type LoadAdCallback = {
        /**
         * @en
         * Ad has been successfully loaded for the placement
         * @zh
         * 广告加载成功
         */
        onAdLoad?: (placementId: string) => void;
        /**
         * @en
         * Ad has failed to load for the placement
         * @zh
         * 广告加载失败
         */
        onError?: (placementId: string, error: string) => void;
    };
    /**
     * @en
     * Ads Play Callbacks
     * @zh
     * 广告播放回调
     */
    type PlayAdCallback = {
        /**
         * @en
         * Ad experience started
         * @zh
         * 广告开始播放
         */
        onAdStart?: (placementId: string) => void;
        /**
         * @en
         * Ad has rendered
         * @zh
         * 广告已渲染
         */
        onAdViewed?: (placementId: string) => void;
        /**
         * @en
         * Ad experience ended
         * @zh
         * 广告结束
         */
        onAdEnd?: (placementId: string) => void;
        /**
         * @en
         * User clicked on ad
         * @zh
         * 用户点击广告
         */
        onAdClick?: (placementId: string) => void;
        /**
         * @en
         * User earned reward for watching an rewarded ad
         * @zh
         * 用户获得奖励
         */
        onAdRewarded?: (placementId: string) => void;
        /**
         * @en
         * User has left app during an ad experience
         * @zh
         * 用户在广告播放过程中退出APP
         */
        onAdLeftApplication?: (placementId: string) => void;
        /**
         * @en
         * Ad failed to play
         * @zh
         * 广告播放失败
         */
        onError?: (placementId: string, error: string) => void;
        /**
         * @en
         * Vungle creative ID to be displayed
         * @zh
         * 当前广告的Creative ID
         */
        creativeId?: (creativeId: string) => void;
        /**
         * @en
         * For IOS only: SDK is about to play a video ad
         * @zh
         * 只用于IOS：广告即将播放
         */
        onAdWillShow?: (placementId: string) => void;
        /**
         * @en
         * For IOS only: SDK is about to close an ad
         * @zh
         * 只用于IOS：广告即将关闭
         */
        onAdWillClose?: (placementId: string) => void;
    };
    /**
     * @en
     * Callbacks
     * @zh
     * 回调函数
     */
    export type VungleCallbacks = {
        init?: InitCallback;
        load?: LoadAdCallback;
        play?: PlayAdCallback;
    };
    /**
     * @en
     * Initialization Settings
     * @zh
     * 广告初始化设置
     */
    export type Setting = {
        /**
         * @en
         * limits for available space(megabyte) on a user’s device before the Vungle SDK initializes
         * @zh
         * SDK初始化时需要的最小存储空间，单位为MB
         */
        minimumDiskSpaceForInit?: number;
        /**
         * @en
         * limits for available space(megabyte) on a user’s device before ads fetching .
         * @zh
         * 广告播放时需要的最小存储空间，单位为MB
         */
        minimumDiskSpaceForAd?: number;
        /**
         * @en
         * For Android only: Set true to opt out for Android ID collection by SDK or false (default) to opt in
         * @zh
         * 只用于Android：设置为True来禁止Vungle SDK获取Android ID
         */
        restrictAndroidID?: boolean;
        /**
         * @en
         * For IOS only: set false to prevent passing the IDFV from the device to the SDK
         * @zh
         * 只用于IOS：设置为False来禁止Vungle SDK获取IDFV
         */
        setPublishIDFV?: boolean;
    };
    /**
     * @en
     * Size of Banner or MREC
     * @zh
     * Banner或MREC广告的大小
     */
    export enum AdSize {
        /**
         * @en
         * 320x50
         * @zh
         * 320x50
         */
        BANNER = "BANNER",
        /**
         * @en
         * 300x50
         * @zh
         * 300x50
         */
        BANNER_SHORT = "BANNER_SHORT",
        /**
         * @en
         * 728x90
         * @zh
         * 728x90
         */
        BANNER_LEADERBOARD = "BANNER_LEADERBOARD",
        /**
         * @en
         * 300x250
         * @zh
         * 300x250
         */
        MREC = "MREC"
    }
    /**
     * @en
     * Ads Orientation
     * @zh
     * 广告方向
     */
    export enum OrientationType {
        /**
         * @en
         * Video ad will rotate to match device orientation
         * @zh
         * 广告将旋转来适配设备方向
         */
        AUTO_ROTATE = "AUTO_ROTATE",
        /**
         * @en
         * Force video ad to play in landscape orientation
         * @zh
         * 强制横屏播放
         */
        LANDSCAPE = "LANDSCAPE",
        /**
         * @en
         * Force video ad to play in portrait orientation
         * @zh
         * 强制竖屏播放
         */
        PORTRAIT = "PORTRAIT",
        /**
         * @en
         * For Android only: Force video ad to play in it's own orientation regardless of device orientation
         * @zh
         * 只用于Android：强制素材按照自己的方向来播放
         */
        MATCH_VIDEO = "MATCH_VIDEO"
    }
    /**
     * @en
     * Incentivized alert dialog that displays when a user prematurely closes a rewarded ad experience.
     * @zh
     * 用户终止观看奖励广告时的弹窗信息
     */
    export type IncentivizedFields = {
        /**
         * @en
         * user ID
         * @zh
         * 用户ID
         */
        userID?: string;
        /**
         * @en
         * dialog title
         * @zh
         * 弹窗提示中的标题
         */
        title?: string;
        /**
         * @en
         * dialog body
         * @zh
         * 弹窗提示正文
         */
        body?: string;
        /**
         * @en
         * title for the close button text of the alert dialog
         * @zh
         * 继续观看按钮的文字
         */
        keepWatching?: string;
        /**
         * @en
         * title for the close button text of the alert dialog
         * @zh
         * 结束观看按钮的文字
         */
        close?: string;
    };
    /**
     * @en
     * Config of Interstitial and rewarded ads
     * @zh
     * 插屏和奖励广告的配置
     */
    export type AdConfig = {
        /**
         * @en
         * audio settings, set true to mute ads
         * @zh
         * 静音设置
         */
        muted?: boolean;
        /**
         * @en
         * Ads Orientation
         * @zh
         * 广告方向
         */
        orientation?: OrientationType;
        /**
         * @en
         * Incentivized alert dialog that displays when a user prematurely closes a rewarded ad experience.
         * @zh
         * 用户终止观看奖励广告时的弹窗信息
         */
        incentivizedFields?: IncentivizedFields;
        /**
         * @en
         * Video should start with its audio settings based on the value specified.
         * @zh
         * 如果您从Vungle收到顺序数据报告，请使用此字段传递中介顺序。这是一个整数，指示此广告在游戏会话中的显示顺序（例如，如果已经在该会话中显示了两个广告，然后将来自Vungle的该广告显示为第三，则传递“ 3”）。
         */
        ordinal?: Number;
    };
    /**
     * @en
     * Config of Banner and MREC
     * @zh
     * Banner和MREC广告的配置
     */
    export type BannerConfig = {
        /**
         * @en
         * Size of Banner or MREC
         * @zh
         * Banner或MREC广告的大小
         */
        adSize?: AdSize;
        /**
         * @en
         * audio settings, set true to mute ads
         * @zh
         * 静音设置
         */
        muted?: boolean;
    };
    /**
     * @en
     * consent status of GDPR and CCPA
     * @zh
     * 设置GDPR和CCPA协议的同意状态
     */
    export enum ConsentStatus {
        OPTED_IN = "OPTED_IN",
        OPTED_OUT = "OPTED_OUT"
    }
    /**
     * @en
     * position of Banner or MREC
     * @zh
     * Banner或MREC广告的播放位置
     */
    export enum BannerPosition {
        BOTTOM = "BOTTOM",
        TOP = "TOP"
    }
    export interface VungleAd {
        /**
         * @en
         * SDK initialization
         * @zh
         * SDK初始化
         */
        init(setting?: Setting): void;
        /**
         * @en
         * check if SDK is initialized
         * @zh
         * 获取SDK初始化状态
         */
        isInitialized(): boolean;
        /**
         * @en
         * For interstitial or rewarded ads: check if an ad is playable or not
         * @zh
         * 用于插屏或者奖励广告：检查广告是否可播放
         */
        canPlayAd(placementId: string): boolean;
        /**
         * @en
         * For interstitial or rewarded ads: load ads
         * @zh
         * 用于插屏或者奖励广告：加载广告
         */
        loadAd(placementId: string): void;
        /**
         * @en
         * For interstitial or rewarded ads: play ads
         * @zh
         * 用于插屏或者奖励广告：播放广告
         */
        playAd(placementId: string, adConfig: AdConfig): void;
        /**
         * @en
         * For Banner or MREC: check if an ad is playable or not
         * @zh
         * 用于Banner或者MREC广告：检查广告是否可播放
         */
        canPlayBanner(placementId: string, bannerConfig: BannerConfig): boolean; /**
         * @en
         * For Banner or MREC: load ads
         * @zh
         * 用于Banner或者MREC广告：加载广告
         */
        loadBanner(placementId: string, bannerConfig: BannerConfig): void; /**
         * @en
         * For Banner or MREC: show ads
         * @zh
         * 用于Banner或者MREC广告：展示广告
         */
        getBanner(placementId: string, bannerConfig: BannerConfig, position?: BannerPosition): void; /**
         * @en
         * For Banner or MREC: destroy ads
         * @zh
         * 用于Banner或者MREC广告：销毁广告
         */
        destroyBanner(placementId: string): void;
        /**
         * @en
         * GDPR: update consent status
         * @zh
         * GDPR: 更新同意状态
         */
        updateConsentStatus(consentStatus: ConsentStatus, consentMessageVersion: string): void;
        /**
         * @en
         * GDPR: get consent status
         * @zh
         * GDPR: 获取同意状态
         */
        getConsentStatus(): string;
        /**
         * @en
         * GDPR: get consent status
         * @zh
         * GDPR: 获取同意版本
         */
        getConsentMessageVersion(): string;
        /**
         * @en
         * CCPA: update consent status
         * @zh
         * CCPA: 更新同意状态
         */
        updateCCPAStatus(consentStatus: ConsentStatus): void;
        /**
         * @en
         * CCPA: get consent status
         * @zh
         * CCPA: 获取同意状态
         */
        getCCPAStatus(): string;
        /**
         * @en
         * enable/disable debug log
         * @zh
         * 是否显示debug log
         */
        setLogDebug(debug: boolean): void;
    }
    export class VungleAd {
        protected className: string;
        constructor();
        /**
         * @en
         * set callbacks
         * @zh
         * 设置回调
         */
        setCallbacks(callbacks: VungleCallbacks): void;
    }
    export namespace Android {
        type InitCallback = {
            onSuccess?: () => void;
            onError?: (error: string) => void;
            onAutoCacheAdAvailable?: (placementId: string) => void;
        };
        type LoadAdCallback = {
            onAdLoad?: (placementId: string) => void;
            onError?: (placementId: string, error: string) => void;
        };
        type PlayAdCallback = {
            onAdStart?: (placementId: string) => void;
            onAdViewed?: (placementId: string) => void;
            onAdEnd?: (placementId: string) => void;
            onAdClick?: (placementId: string) => void;
            onAdRewarded?: (placementId: string) => void;
            onAdLeftApplication?: (placementId: string) => void;
            onError?: (placementId: string, error: string) => void;
            creativeId?: (creativeId: string) => void;
        };
        export const initCallback: InitCallback;
        export const loadAdCallback: LoadAdCallback;
        export const playAdCallback: PlayAdCallback;
        export class AndroidVungleAd extends VungleAd implements VungleAd {
            init(setting?: Setting): void;
            isInitialized(): boolean;
            canPlayAd(placementId: string): boolean;
            loadAd(placementId: string): void;
            playAd(placementId: string, adConfig: AdConfig): void;
            canPlayBanner(placementId: string, bannerConfig: BannerConfig): boolean;
            loadBanner(placementId: string, bannerConfig: BannerConfig): void;
            getBanner(placementId: string, bannerConfig: BannerConfig, position?: BannerPosition): void;
            destroyBanner(placementId: string): void;
            updateConsentStatus(consentStatus: ConsentStatus, consentMessageVersion: string): void;
            getConsentStatus(): string;
            getConsentMessageVersion(): string;
            updateCCPAStatus(consentStatus: ConsentStatus): void;
            getCCPAStatus(): string;
            setLogDebug(debug: boolean): void;
        }
        export {};
    }
    export namespace iOS {
        type InitCallback = {
            vungleSDKDidInitialize?: () => void;
            vungleSDKFailedToInitialize?: (error: string) => void;
        };
        type LoadAdCallback = {
            vungleAdPlayabilityUpdate?: (placementId: string, error?: string) => void;
            vungleAdFailedToLoad?: (placementId: string, error: string) => void;
        };
        type PlayAdCallback = {
            vungleAdFailedToPlay?: (placementId: string, error: string) => void;
            vungleWillShowAdForPlacementID?: (placementId: string) => void;
            vungleDidShowAdForPlacementID?: (placementId: string) => void;
            vungleAdViewedForPlacement?: (placementId: string) => void;
            vungleWillCloseAdForPlacementID?: (placementId: string) => void;
            vungleDidCloseAdForPlacementID?: (placementId: string) => void;
            vungleTrackClickForPlacementID?: (placementId: string) => void;
            vungleRewardUserForPlacementID?: (placementId: string) => void;
            vungleWillLeaveApplicationForPlacementID?: (placementId: string) => void;
            vungleCreativeReadyForPlacement?: (creativeId: string, placementId: string) => void;
        };
        export const initCallback: InitCallback;
        export const loadAdCallback: LoadAdCallback;
        export const playAdCallback: PlayAdCallback;
        export class iOSVungleAd extends VungleAd implements VungleAd {
            init(setting?: Setting): void;
            isInitialized(): boolean;
            canPlayAd(placementId: string): boolean;
            loadAd(placementId: string): void;
            playAd(placementId: string, adConfig: AdConfig): void;
            canPlayBanner(placementId: string, bannerConfig: BannerConfig): boolean;
            loadBanner(placementId: string, bannerConfig: BannerConfig): void;
            getBanner(placementId: string, bannerConfig: BannerConfig, position?: BannerPosition): void;
            destroyBanner(placementId: string): void;
            updateConsentStatus(consentStatus: vungle.ConsentStatus, consentMessageVersion: string): void;
            getConsentStatus(): string;
            getConsentMessageVersion(): string;
            updateCCPAStatus(consentStatus: vungle.ConsentStatus): void;
            getCCPAStatus(): string;
            setLogDebug(debug: boolean): void;
        }
        export {};
    }
    export const vungleService: VungleAd;
    export {};
}
