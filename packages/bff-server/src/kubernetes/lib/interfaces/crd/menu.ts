/**
 * 由 src/kubernetes/gen/index.ts 自动生成
 * !!! 请不要修改 !!!
 */
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Menu is the Schema for the menus API
 */
export interface Menu {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  metadata?: {
    [k: string]: any;
  };
  /**
   * MenuSpec defines the desired state of Menu
   */
  spec?: {
    /**
     * 菜单对应路由是否可以切换集群
     */
    cluster?: boolean;
    /**
     * * 菜单组所在列序号
     */
    column?: number;
    /**
     * menu 显示控制
     */
    disabled?: boolean;
    /**
     * 获取 title 的函数
     */
    getTitleForReplaceSider?: {
      /**
       * 方法
       */
      method?: string;
      /**
       * 参数
       */
      params?: string;
      /**
       * 获取数据的路径
       */
      responseDataPath?: string[];
      [k: string]: any;
    };
    /**
     * 菜单图标
     */
    icon?: string;
    /**
     * 菜单组中文名称
     */
    id?: string;
    /**
     * 是否渲染选择项目、集群
     */
    isRenderSelectCurrent?: boolean;
    /**
     * 父菜单 ID
     */
    parent?: string;
    /**
     * 菜单路由
     */
    pathname?: string;
    /**
     * 菜单对应路由是否可以切换项目
     */
    project?: boolean;
    /**
     * 菜单在当前组中的排序，数字越小越靠前
     */
    rankingInColumn?: number;
    /**
     * 跳转菜单路由，优先级高于 pathname，指定后点击菜单会跳转到 redirect 相应路由
     */
    redirect?: string;
    /**
     * 给替换菜单的返回按钮使用，当新的 pathname 是替换菜单，且替换菜单的返回按钮需要返回到当前 pathname 时，配置此属性； 其值得为新的 pathname，同时需要注意⚠️，如果新的地址有多个，则应该取多个地址的公共部分，例如，/oidc/management/projects/:id/role 和 /oidc/management/projects/:id/member 都需要支持，则应配置为/oidc/management/projects/:id
     */
    replaceSiderBackNextPathnamePattern?: string;
    /**
     * 菜单可对应的 module 二进制位 (有一个满足即可见)
     */
    requiredModuleBits?: number[];
    /**
     * 菜单可见需要的角色
     */
    requiredRoles?: string[];
    /**
     * 同 a 标签的 target 属性
     */
    target?: string;
    /**
     * 菜单对应路由是否可以切换租户
     */
    tenant?: boolean;
    /**
     * 菜单组中文名称
     */
    text?: string;
    /**
     * 菜单组英文名称
     */
    textEn: string;
    /**
     * 是否在进入子页面后将 sider 替换
     */
    useChildrenReplaceSider?: boolean;
    [k: string]: any;
  };
  /**
   * MenuStatus defines the observed state of Menu
   */
  status?: {
    [k: string]: any;
  };
  [k: string]: any;
}