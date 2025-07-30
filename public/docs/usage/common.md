# 通用客户端教程

:::info 提示
本教程对几乎所有情况都可用，并非一定要求使用幻缘映射发行的 Frp 客户端，原版 Frp 也可使用。~~或者您可以试一下其他 Frp 厂商发行的版本~~
:::

## 下载客户端

打开 [文件下载](/dashboard/downloads) 页面，根据您的系统选择合适的客户端。

![下载核心](https://img.fastmirror.net/s/2025/04/12/67fa797db73e0.png)

64 位系统用户请下载 `amd64` 架构, 32 位系统请下载 `386` 架构。
:::warning 兼容性要求
若您是 Windows 10 以下、Windows Server 2016 以下、macOS 10.15 以下的用户，请切换至 **ME Frp 客户端核心 (Legacy)**。Next 核心不支持这些系统。  
![下载 Legacy 核心](https://img.fastmirror.net/s/2025/04/12/67fa797e494e5.png)
此外，使用 Legacy 版本只能收到有限技术支持。这是为了兼容性而发行的版本。
:::

## 获取启动配置

前往 [隧道管理](/dashboard/manage-proxies) 页面，找到您需要启动的节点。

![隧道管理](https://img.fastmirror.net/s/2025/04/12/67fa7bc15d6ac.png)

点击展开下方的 “更多” 选项，选择 “生成启动配置”。

### 快捷启动

如果您选用了 “快捷启动” 选项，这代表您只能使用幻缘映射发行的 Frp 客户端进行启动（这是专有功能）。

![快捷启动配置](https://img.fastmirror.net/s/2025/04/12/67fa7c78d6d5c.png)

### 配置文件启动

如果您选用了 “配置文件启动” 选项，这代表您可以使用任意 Frp 客户端进行启动。  
:::error 但请记住
这是为专业用户准备的配置文件, 请不要在没有判断能力的情况下随意修改, 否则隧道可能无法正常启动。  
获取配置文件后请您将其保存在合适的地方，稍后请使用 `-c 配置文件路径` 参数启动隧道。
:::
:::warning 兼容性要求
Toml/Yaml/Json 格式仅支持 Frp 0.52.0 及以上版本。  
如果您的 Frp 版本低于 0.52.0，请使用 Ini 格式。
:::

![配置文件启动配置](https://img.fastmirror.net/s/2025/04/12/67fa7d5f8abff.png)

您可以点击下方按钮下载 / 复制配置文件。

#### HTTP / HTTPS 隧道请注意

请修改相关 SSL 配置，使其指向您的 SSL 证书及私钥, 否则隧道无法正常启动。以下是一些示例：  

```toml
[proxies.plugin]
type = "https2http"
localAddr = "127.0.0.1:80"  # 视情况而定，不同隧道可能有不同配置
crtPath = "您 SSL 证书文件的路径"  # 请将此行修改为您的 SSL 证书文件路径
keyPath = "您 SSL 私钥文件的路径"  # 请将此行修改为您的 SSL 私钥文件路径
```

```json
{
  ...,
  "proxies": [
    {
      ...,
      "plugin": {
        "type": "https2http",
        "local_addr": "127.0.0.1:80",  # 视情况而定，不同隧道可能有不同配置
        "crt_path": "您 SSL 证书文件的路径",  # 请将此行修改为您的 SSL 证书文件路径
        "key_path": "您 SSL 私钥文件的路径"  # 请将此行修改为您的 SSL 私钥文件路径
      },
      ...
    }
  ]
}
```

```yaml
proxies:
  - ...
    plugin:
      type: "https2http"
      local_addr: "127.0.0.1:80"  # 视情况而定，不同隧道可能有不同配置
      crt_path: "您 SSL 证书文件的路径"  # 请将此行修改为您的 SSL 证书文件路径
      key_path: "您 SSL 私钥文件的路径"  # 请将此行修改为您的 SSL 私钥文件路径
```

```ini
[test]  # 视情况而定，此处是对应隧道的名称
plugin = https2http
plugin_local_addr = 127.0.0.1:80  # 视情况而定，不同隧道可能有不同配置
plugin_crt_path = 您 SSL 证书文件的路径  # 请将此行修改为您的 SSL 证书文件路径
plugin_key_path = 您 SSL 私钥文件的路径  # 请将此行修改为您的 SSL 私钥文件路径
```

## 启动隧道

### Windows 用户

解压下载的压缩包，得到 Frp 可执行文件。  
在可执行文件同目录下，单击上方地址栏空白处，输入 `cmd` 或 `powershell` 或 `pwsh` （请根据您的系统环境选择），按下 Enter 键，打开命令行。

![打开命令行](https://img.fastmirror.net/s/2025/04/12/67fa80d549514.png)

然后在命令行中输入您刚才获取的启动参数，回车即可启动隧道。

![启动隧道](https://img.fastmirror.net/s/2025/04/12/67fa8335c3469.png)

当出现 `启动 [XXX] 隧道 [XXXXXXX.XXX] 成功, 您可以使用 [WWWWWWWW] 访问您的服务` 时，隧道启动成功。

### macOS 用户

打开您的启动台，在搜索栏中键入“终端”，然后点按“终端”。

使用终端的 `cd` 命令，切换到 Frp 可执行文件所在目录。

您需要为 Frp 可执行文件添加执行权限，使用 `chmod +x 可执行文件名` 命令即可。

然后在终端中输入您刚才获取的启动参数，回车即可启动隧道。

当出现 `启动 [XXX] 隧道 [XXXXXXX.XXX] 成功, 您可以使用 [WWWWWWWW] 访问您的服务` 时，隧道启动成功。

### Linux 用户

打开您的终端，使用 `cd` 命令，切换到 Frp 可执行文件所在目录。

您需要为 Frp 可执行文件添加执行权限，使用 `chmod +x 可执行文件名` 命令即可。

然后在终端中输入您刚才获取的启动参数，回车即可启动隧道。

当出现 `启动 [XXX] 隧道 [XXXXXXX.XXX] 成功, 您可以使用 [WWWWWWWW] 访问您的服务` 时，隧道启动成功。
