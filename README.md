## 生成各种私钥证书和签证过程：

### 一.CA机构

##### 1) 创建私钥

```bash
$ openssl genrsa -out ca-key.pem 2048
```

##### 2) 创建证书签名请求

```bash
$ openssl req -new -sha256 -key ca-key.pem -out ca-csr.pem
```

##### 3) 创建自签名证书

```bash
$ openssl x509 -req -in ca-csr.pem -signkey ca-key.pem -out ca-cert.pem
```

### 二.服务器和客户端

##### 1) 创建私钥

```bash
$ openssl genrsa -out <server|client> -key 2048
```

##### 2) 同上创建证书签名请求(注意Common Name要匹配服务器域名)

```bash
$ openssl req -new -sha256 -key <server|client> -key -out <server|client> -csr.pem
```

##### 3) 向CA机构申请签名

```bash
$ openssl x509 -req -CA ca-cert.pem -CAkey ca-key.pem /
  -CAcreateserial -in <server|client> -csr.pem -out
<server|client> -cert.pem
```

##### 4) 将证书和私钥打包成pfx文件(可选)

```bash
$ openssl pkcs12 -export -in <server|client> -cert.pem -inkey <server|client> /
  -key.pem -certfile ca-cert.pem -out <server|client>.pfx
```
