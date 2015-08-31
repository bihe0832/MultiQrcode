# MultiQrcode

基于JS的浏览器类型监测组件

### 背景：

基友做了个APP，结果发了一排二维码，然后互相吐槽了一下，发现移动应用出现也一年了，虽然很简单，但是好像大家都懒得通过写个JS来判断然后提一个二维码让大家下载应用。然后内容不多，而且没啥难度，但是动嘴不如动手，就专门整理了一下。

### 简介：

提供了几个JS接口，通过这几个JS接口，可以轻松获取到当前打开页面的浏览器类型，然后根据类型跳转到对应的链接。同时也提供了两个demo方便大家参考。

二维码：![二维码入场券](./res/qrcode.png "二维码入场券")

### Demo：

#### Demo1 :

Demo1详细展示了各种设备下的页面跳转(PC和各种移动设备）)。不会换起下载，只会打开各种页面。详细的跳转代码参见目录下jump.html

二维码：![二维码入场券](./res/demo1_qrcode.png "二维码入场券")

#### Demo2:

Demo2提供了常见应用下载的二维码的方式中，提供一个二维码支持各种平台下载。详细的跳转代码参见目录下download.html

二维码：![二维码入场券](./res/demo2_qrcode.png "二维码入场券")

#### Tools:

Tools提供了获取是否是移动设备，获取系统，设备类型的各种函数的调用效果。详细的跳转代码参见根目录下tools.html.


二维码：![二维码入场券](./res/tools_qrcode.png "二维码入场券")

### 实现原理：
     
利用浏览的navigator中的platform字段和userAgent字段来区分请求来源。

### 提供接口：
     
#### ZixieJS.browser.isPc

- 功能：判断平台是不是PC
- 参数：无
- 返回值：是否为PC设备

#### ZixieJS.browser.getDevices

- 功能：判断设备类型
- 参数：无
- 返回值：ZixieJS.browser.devices

#### ZixieJS.browser.getSuperAPP

- 功能：判断是否为超级app
- 参数：无
- 返回值：ZixieJS.browser.app

#### ZixieJS.browser.getOSDetail

- 功能：获取具体的PC 操作系统类型和版本号
- 参数：无
- 返回值：ZixieJS.browser.OS

#### ZixieJS.browser.getOS

- 功能：获取PC系统类型
- 参数：无
- 返回值：ZixieJS.browser.OS


### 代码结构：
     
     — Demo1: Demo1相关代码
     	- jump.html: Demo1核心代码
     — Demo2: Demo2相关代码
     	- download.html: Demo2核心代码
     — index.html:Demo首页
     — res:页面相关资源
     	- brower.js :核心代码
     — tools.html:JS调用的整体事例。

