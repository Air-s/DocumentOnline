### 入口

- Spring Boot Documentation：[Click Here](<https://spring.io/projects/spring-boot#learn>)
- Spring Boot 2.2.5 Reference Documentation sections overview：[Click Here](<https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/index.html>)
- 下面的内容是2.2.5版本文档的摘要与概括

### [Documentation Overview](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/documentation-overview.html#boot-documentation)

- 提供三种形式的手册供阅读或下载（[Multi-page HTML](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html)、[Single page HTML](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/htmlsingle)、[PDF](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/pdf/spring-boot-reference.pdf)）

  > PDF版可用于做文档比对，当发布新版本时下载文档可与正在使用的当前版本文档比对查找出更新的部分

-  [How-to documents](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/howto.html#howto)：你的问题说不定官方已经有解决方案了
-  [guides](https://spring.io/guides)：这里有大量实例教程帮助你了解 Spring

### [Getting Started](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/getting-started.html#getting-started)

- 如果你没时间重头学起，可以从 [guides](https://spring.io/guides) 找到适合你的教程。
- Spring boot 需要：Java 8+、Maven 3.3+/Gradle 5.x or 6.x
- Spring boot 支持以下 Servlet 容器：Tomcat9.0（Servlet4.0）、Jetty 9.4（Servlet3.1）、Undertow 2.0（Servlet4.0）

- 关于新建 Spring boot 工程可以通过多种方式，文档中介绍了Maven、Gradle、CLI 等多种方式。不过有更多轻松的方式新建工程，[参考这篇文章](<https://blog.csdn.net/jianggujin/article/details/78748787>)（推荐使用 [start.spring.io](https://start.spring.io/) 或 使用 IDEA Spring initializer，具体用法或参数可参考 [Spring Initializr documentation](https://docs.spring.io/initializr/docs/current/reference/html//#user-guide)）

  > 建议新建一个Spring boot工程跑一个Hello World

- 关于Spring boot Maven 的一些简单介绍

  - 通常，您的 Maven POM 文件继承自 spring-boot-starter-parent 项目，他是一个特殊的“Starter”。关于 "Starter" 的问题下一章会有讲述（"Starter"简单地说就是一个针对某一领域或应用的常见"默认值"配置，例如我们想建立一个Web应用，需要各类依赖，而spring-boot-starter-web这个starter就引用了针对Web开发的常见工具。只要引用了它，就可以迅速起手了）。

    > Spring Boot dependencies use the `org.springframework.boot` `groupId`. Typically, your Maven POM file inherits from the `spring-boot-starter-parent` project and declares dependencies to one or more [“Starters”](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/using-spring-boot.html#using-boot-starter). 

  - 继承 spring-boot-starter-parent 是使用 Spring Boot 的一种好方法，但可能并非始终适合。有时您可能需要继承其他父POM，或者您可能不喜欢我们的默认设置。在这种情况下，请参阅 using-spring-boot 一章以获取解决方案。

    > The `spring-boot-starter-parent` is a great way to use Spring Boot, but it might not be suitable all of the time. Sometimes you may need to inherit from a different parent POM, or you might not like our default settings. In those cases, see [using-spring-boot.html](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/using-spring-boot.html#using-boot-maven-without-a-parent) for an alternative solution that uses an `import` scope.

  - spring-boot-starter-parent是一种特殊的 "Starter"，作用之一是托管版本号。当需要加入新的依赖时无需输入 `version` 信息。

- 3.12 Gradle、3.2 CLI、3.2.1手动安装、3.2.2 SDKMAN 安装等更多安装方式没有认真看

- 简单介绍代码中出现的注解和类

  - 一些Web相关注解可参考 [MVC section](https://docs.spring.io/spring/docs/5.2.4.RELEASE/spring-framework-reference/web.html#mvc) 部分。
  - `@RestController`：被标注的类视作 WebController，在处理传入的Web请求时会考虑使用它
  - `@RequestMapping` ：将处理匹配URL请求
  - `@EnableAutoConfiguration`：尝试自动配置Spring boot，很大程度上免去了各种（默认或常规）配置项的编写
  - `SpringApplication` ：Spring boot 启动类。

- 更新、迁移至新版本Spring Boot
  - 如果从 `1.x` 版本更新至新版本，查看 [migration guide” on the project wiki](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide) 获取解决办法，具体迁移至何种版本可以查看 [release notes](https://github.com/spring-projects/spring-boot/wiki) 查看版本特性。
  - 迁移之后可能会有一些属性配置项不能工作，可以添加`spring-boot-properties-migrator` 分析应用并尝试迁移属性。迁移完成后务必移除此模块依赖。
  - 升级 CLI 工具利用命令（例如`brew upgrade`）即可

- 创建可执行应用（jar）

  - 添加 `spring-boot-maven-plugin` 插件

    - 如果没有使用`spring-boot-starter-parent` 这个Parent PEM，你需要额外填写一些配置（例如 `<executions>`），具体可参考 [plugin documentation](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/maven-plugin//usage.html) 

  - 运行 `mvn package`，输出 [INFO] Building jar: ... 会显示包存放路径

  - 运行 `java -jar`，启动应用

  - Spring boot提供多种方法打包，详见 [The Executable Jar Format](https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/appendix-executable-jar-format.html#executable-jar) 一章

    

### [Using Spring Boot](<https://docs.spring.io/spring-boot/docs/2.2.5.RELEASE/reference/html/using-spring-boot.html#using-boot-starter>)

- 