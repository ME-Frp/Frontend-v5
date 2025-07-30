# fnOS 飞牛私有云

:::info 相关信息
飞牛私有云 fnOS 是一款基于最新 Linux 内核深度开发的 NAS 操作系统。  
官方网站：<https://www.fnnas.com>
:::

:::warning 注意事项
官方应用商店中的 `Frpc客户端` 的管理、监控方式较为繁琐，若想追求更好的体验，请使用 Docker 部署。
:::

## 安装 Frp 客户端

点击 fnOS 面板的 `应用中心` 图标以打开应用中心。

![应用中心](https://img.fastmirror.net/s/2025/04/13/67fa8e8b8c80a.png)

在应用中心中搜索 `Frpc客户端`，点击 “安装”，并等待安装完成。

![搜索 Frpc 客户端](https://img.fastmirror.net/s/2025/04/13/67fa8e8c749f2.png)

可以勾选 “安装完成后立即启用”。  

:::warning 注意事项
请牢记您安装应用的位置，后续查看运行日志需要用到。
:::

## 获取启动配置

前往 [隧道管理](/dashboard/manage-proxies) 页面，找到您需要启动的节点。

![隧道管理](https://img.fastmirror.net/s/2025/04/12/67fa7bc15d6ac.png)

点击展开下方的 “更多” 选项，选择 “生成启动配置”，然后选用 “配置文件”。

![配置文件启动配置](https://img.fastmirror.net/s/2025/04/12/67fa7d5f8abff.png)

您可以点击下方按钮复制配置文件，保留备用。

## 填写启动配置

点击 fnOS 面板的 `frpc` 图标以打开配置文件界面，然后将刚刚复制的配置文件粘贴进去，点击 “提交”。

![编辑配置文件](https://img.fastmirror.net/s/2025/04/13/67fa9098191c4.png)

## 启动隧道

不需要您手动启动，fnOS 会自静默启动隧道。

## 查看日志

:::info 需要管理员权限
请使用管理员账户登录 fnOS 面板。
:::

点击 fnOS 面板的 `文件管理` 图标以打开文件管理界面，然后点击左下角的 “管理员视角”。

![文件管理](https://img.fastmirror.net/s/2025/04/13/67fa91a2c45ad.png)

随后请点击您安装 `Frpc客户端` 的路径，并在其中导航到 `@appdata` -> `frpc`。

![管理员视角文件管理](https://img.fastmirror.net/s/2025/04/13/67fa9216661ed.png)

`frpc.log` 文件即为隧道启动日志。
