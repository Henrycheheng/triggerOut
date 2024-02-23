declare const cc: any;
declare const JavascriptJavaBridge: any;
declare namespace huawei {
    namespace hms {
        namespace push {
            /**
             * @en
             * Enum for analytics event listener.
             * @zh
             * 异步 API 调用的回调事件名称定义。
             */
            enum API_EVENT_LIST {
                getOdidCallback = "getOdidCallback",
                getAAIDCallback = "getAAIDCallback",
                getTokenCallback = "getTokenCallback",
                getTokenBySubjectIdCallback = "getTokenBySubjectIdCallback",
                setTagCallback = "setTagCallback",
                delTagCallback = "delTagCallback",
                turnOnPushCallback = "turnOnPushCallback",
                turnOffPushCallback = "turnOffPushCallback",
                sendMessageCallback = "sendMessageCallback",
                deleteAAIDCallback = "deleteAAIDCallback",
                deleteTokenCallback = "deleteTokenCallback",
                deleteTokenBySubjectIdCallback = "deleteTokenBySubjectIdCallback",
                addProfileCallback = "addProfileCallback",
                deleteProfileCallback = "deleteProfileCallback"
            }
            /**
             * @en
             * The status code of callback from the java side.
             * @zh
             * 从 java 层返回的 callback 的状态。
             */
            enum StatusCode {
                /**
                 * @en
                 * Fail.
                 * @zh
                 * 接口调用失败。
                 */
                fail = 0,
                /**
                 * @en
                 * Success.
                 * @zh
                 * 接口调用成功。
                 */
                success = 1
            }
            /**
             * @en
             * The general result of callback from java side.
             * @zh
             * 从 java 层返回的 callback 的通用结果对象。
             */
            class ApiCbResult {
                originData: any;
                code: StatusCode;
                errMsg?: string;
                data?: any;
                constructor(originData: any);
                toString(): string;
            }
            /**
             * @en
             *
             * @zh
             *
             */
            class HmsPushService {
                private eventHandler;
                constructor();
                /**
                 * @en
                 * Add event listener.
                 * @zh
                 * 持续监听事件。
                 * @param eventName - Event name.
                 * @param cb - Event callback.
                 * @param thisArg - Target node.
                 */
                on(eventName: string, cb: (result: ApiCbResult) => void, thisArg?: any, once?: boolean): void;
                /**
                 * @en
                 * Add event listener (once only).
                 * @zh
                 * 监听一次事件。
                 * @param eventName - Event name.
                 * @param cb - Event callback.
                 * @param thisArg - Target node.
                 */
                once(eventName: string, cb: (result: ApiCbResult) => void, thisArg?: any): void;
                /***
                 * @internal
                 */
                emit(eventName: string, ...params: any[]): void;
                /**
                 * @en
                 * Remove the event listener.
                 * @zh
                 * 取消事件的监听。
                 * @param eventName - Event name.
                 * @param cb - Event callback.
                 * @param thisArg - Target node.
                 * @example
                 */
                off(eventName: string, cb?: (result: ApiCbResult) => void, thisArg?: any): void;
                /**
                 * @en
                 * Remove all event listener of the target node.
                 * @zh
                 * 取消某个节点所有的事件监听。
                 * @param targetNode
                 * @example
                 */
                targetOff(targetNode: any): void;
                /**
                 * 设置别名（不支持）
                 * 调用 SDK 的设置别名方法。
                */
                setAlias(params: string): void;
                /**
                 * 删除别名（不支持）
                 * 调用 SDK 的删除别名方法。
                */
                delAlias(params: string): void;
                /**
                 * 获取接入推送服务所需的Token。
                */
                getToken(appId: string): void;
                _getTokenCallback(result: any): void;
                /**
                 * 多发送者场景下，目标应用为发送者注销Token的方法
                */
                getTokenBySubjectId(subjectId: string): void;
                /**
                 * @internal
                 */
                _getTokenBySubjectIdCallback(result: any): void;
                /**
                 * 删除Token。
                 */
                deleteToken(appId: string): void;
                _deleteTokenCallback(result: any): void;
                /**
                 * 多发送者场景下，目标应用为发送者注销Token的方法。
                */
                deleteTokenBySubjectId(subjectId: string): void;
                _deleteTokenBySubjectIdCallback(result: any): void;
                /**
                 * 异步任务订阅主题
                 * https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hmsmessaging-0000001050255650#section1222313413551
                */
                setTag(tag: string): void;
                private _setTagCallback;
                /**
                 * 异步任务取消订阅主题
                 * https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hmsmessaging-0000001050255650#section7598115275611
                */
                delTag(tag: string): void;
                private _delTagCallback;
                /**
                 * 异步任务打开接收通知栏消息开关
                */
                turnOnPush(): void;
                private _turnOnPushCallback;
                /**
                 * 异步任务关闭接收通知栏消息开关。
                */
                turnOffPush(): void;
                private _turnOffPushCallback;
                /**
                 * 华为Push服务器通过HTTPS方式调用此接口给您的服务器推送上行消息。
                 * params：json 序列化后的数据
                */
                sendMessage(params: string): void;
                private _sendMessageCallback;
                /**
                 * 异步任务获取ODID
                */
                getOdid(): void;
                private _getOdidCallback;
                /**
                 * 异步任务获取AAID
                */
                getAAID(): void;
                /**
                 * @internal
                 */
                private _getAAIDCallback;
                /**
                 * 删除本地生成的AAID与时间戳并同步删除已生成的与本AAID相关的所有Token。
                */
                deleteAAID(): void;
                private _deleteAAIDCallback;
                /**
                 * 获取是否启用自动初始化功能。
                */
                isAutoInitEnabled(): boolean;
                /**
                 * 设置自动初始化使能与否。
                */
                setAutoInitEnabled(enable: boolean): void;
                /**
                 * 判断当前终端设备是否支持帐号校验功能。
                */
                isSupportProfile(): boolean;
                /**
                 * 添加当前设备上该用户与应用的关系。
                */
                addProfile(params: string): void;
                _addProfileCallback(result: any): void;
                /**
                 * 清除当前设备上该用户与应用的关系。
                */
                deleteProfile(params: string): void;
                _deleteProfileCallback(result: any): void;
            }
            const pushService: HmsPushService;
        }
    }
}
