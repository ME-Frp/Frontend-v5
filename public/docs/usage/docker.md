# Docker 容器教程

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
type = 'https2http'
localAddr = '127.0.0.1:80'  # 视情况而定，不同隧道可能有不同配置
crtPath = '您 SSL 证书文件的路径'  # 请将此行修改为您的 SSL 证书文件路径
keyPath = '您 SSL 私钥文件的路径'  # 请将此行修改为您的 SSL 私钥文件路径
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

## 编写 Docker Compose

### 对于快捷启动用户

复制以下文本，并更改相应的 **访问密钥** 和 **隧道ID**

```yaml
services:
    mefrp:
        restart: always
        container_name: mefrp
        network_mode: host
        command: -t 你的访问密钥 -p 你的隧道 ID
        image: mefrp/core-next:latest
```

### 对于配置文件启动用户

将配置文件保存到本地，例如保存到 `./mefrpc.toml`，然后在同路径下创建 Docker Compose 文件：

```yaml
services:
    mefrp:
        restart: always
        container_name: mefrp
        network_mode: host
        volumes:
            - ./mefrpc.toml:/etc/frp/mefrpc.toml:ro
        command: -c /etc/frp/mefrpc.toml
        image: mefrp/core-next:latest
```

## 启动容器

在包含 `docker-compose.yml` 文件的目录中执行以下命令：

```bash
docker-compose up -d
```

## 查看日志

要查看容器运行状态和日志，可以使用：

```bash
# 查看容器状态
docker-compose ps

# 查看实时日志
docker-compose logs -f

# 查看特定服务的日志
docker-compose logs -f mefrp
```

## 停止容器

如需停止容器，执行：

```bash
docker-compose down
```
