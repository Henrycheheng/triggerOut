declare const cc: any;
declare const JavascriptJavaBridge: any;
declare namespace huawei {
    namespace agc {
        namespace rc {
            /**
             * @en
             * Enum for analytics event listener.
             * @zh
             * 异步 API 调用的回调事件名称定义。
             */
            enum API_EVENT_LIST {
                fetchAndApplyCallback = "fetchAndApplyCallback",
                fetchCallback = "fetchCallback",
                applyLastFetchedCallback = "applyLastFetchedCallback",
                clearAllCallback = "clearAllCallback",
                setDeveloperModeCallback = "setDeveloperModeCallback",
                setCustomAttributesCallback = "setCustomAttributesCallback",
                setEnableCollectUserPrivacy = "setEnableCollectUserPrivacy"
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
            class AGCRemoteConfigService {
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
                 * 远程配置服务插件封装了 `fetchAndApply` 方法，对应 Java SDK 的 `fetch` + `apply` 方法。
                 * 建议使用 `fetchAndApply` 方法来获取和更新云端参数值到本地
                 * @param {number} intervalSeconds Interval for fetching data, the unit is seconds, default value is -1 for 12 hours.
                 */
                fetchAndApply(intervalSeconds?: number): void;
                private _fetchAndApplyCallback;
                /**
                 * 开发者也可以通过调用 `fetch` 方法获取，然后再调用 `applyLastFetched` 方法来更新参数值。但还是建议使用 `fetchAndApply` 方法。
                 * @param {number} intervalSeconds Interval for fetching data, the unit is seconds, default value is -1 for 12 hours.
                 */
                fetch(intervalSeconds?: number): void;
                private _fetchCallback;
                /**
                 * @en
                 * Corresponding to `loadLastFetched` + `apply` methods of the Java SDK. Obtains the cached data that is successfully fetched last time, and **applies parameter values**.
                 * @zh
                 * 对应 Java 层 `loadLastFetched` + `apply` 方法，获取最近一次拉取成功的缓存数据，**并生效配置参数**。
                 */
                applyLastFetched(): void;
                private _applyLastFetchedCallback;
                /**
                 * @en
                 * Returns the value of the boolean type for a key.
                 * @zh
                 * 返回 Key 对应的 Boolean 类型的 Value 值
                 * @param {String} key Key of a parameter specified in Remote Configuration.
                 * @return {Boolean} Value of a parameter specified in Remote Configuration.
                 */
                getValueAsBoolean(key: string): boolean;
                /**
                 * @en
                 * Returns the value of the Double (Java layer) type for a key.
                 * @zh
                 * 返回 Key 对应的 Java 侧 Double 类型的 Value 值
                 * @param {String} key Key of a parameter specified in Remote Configuration.
                 * @return {number} Value of a parameter specified in Remote Configuration.
                 */
                getValueAsDouble(key: string): number;
                /**
                 * @en
                 * Returns the value of the Long (Java layer) type for a key.
                 * @zh
                 * 返回 Key 对应的 Java 侧 Long 类型的 Value 值
                 * @param {String} key Key of a parameter specified in Remote Configuration.
                 * @return {number} Value of a parameter specified in Remote Configuration.
                 */
                getValueAsLong(key: string): number;
                /**
                 * @en
                 * Returns the value of the string type for a key.
                 * @zh
                 * 返回 Key 对应的 String 类型的 Value 值
                 * @param {String} key Key of a parameter specified in Remote Configuration.
                 * @return {String} Value of a parameter specified in Remote Configuration.
                 * @example
                 * ```
                 * let value = huawei.agc.rc.rcService.getValueAsString('test');
                 * console.log('Get config by key : test, value :' + value);
                 * ```
                 */
                getValueAsString(key: string): string;
                /**
                 * @en
                 * Returns all values obtained after the combination of the default values and values in Remote Configuration. If they have a same Key, the values in Remote Configuration is preferred.
                 * @zh
                 * 开发者可以获取全部本地默认值和云端参数值，若本地数据与云端数据的 Key 值相同，将获取该 Key 值的云端参数值。返回值为 JSON 对象。
                 * @return {any} All values merged
                 * @example
                 * ```
                 * let values = huawei.agc.rc.rcService.getMergedAll();
                 * console.log('Get all configs : ' + JSON.stringify(values));
                 * ```
                 */
                getMergedAll(): any;
                /**
                 * @en
                 * Clears all cached data, including the data fetched from Remote Configuration and the default values passed.
                 * @zh
                 * 清除所有的缓存数据，包括从云测拉取的数据和传入的默认值
                 */
                clearAll(): void;
                private _clearAllCallback;
                /**
                 * @en
                 * Enables the developer mode, in which the number of times that the client obtains data from Remote Configuration is not limited, and traffic control is still performed over the cloud.
                 * @zh
                 * 用于设置开发者模式，不限制客户端获取数据的次数，但云端仍将进行流量控制。
                 * @param {Boolean} isDeveloperMode Indicates whether to enable the developer mode.
                 */
                setDeveloperMode(isDeveloperMode: boolean): void;
                private _setDeveloperModeCallback;
                /**
                 * @en
                 * Returns the source of a key.
                 * @zh
                 * 返回 Key 对应的来源
                 * @param {String} key Key of a parameter specified in Remote Configuration.
                 * @return {Number} Source of the key
                 * @example
                 * ```
                 * let source = huawei.agc.rc.rcService.getSource('test');
                 * console.log('Get source by key : test, source : ' + source);
                 */
                getSource(key: string): number;
                /**
                 * 设置自定义属性，如果传入的参数为空Map或者null会清除之前设置的属性。
                 * https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/android-remoteconfig-agconnectconfig-0000001056852785#section1713619814117
                 */
                setCustomAttributes(map: any | null): void;
                private _setCustomAttributesCallback;
                /**
                 * 获取自定义属性
                 * https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/android-remoteconfig-agconnectconfig-0000001056852785#section1713619814117
                 */
                getCustomAttributes(): string;
                /**
                 * 设置是否允许收集用户隐私信息
                 * @param enable 是否允许收集用户隐私信息
                 * https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-remoteconfig-android-personal-data-0000001553863633
                 */
                setEnableCollectUserPrivacy(enable: boolean): void;
                private _setEnableCollectUserPrivacy;
            }
            const rcService: AGCRemoteConfigService;
        }
    }
}
