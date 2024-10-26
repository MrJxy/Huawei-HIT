## 单选题（5分/题）：
1.  用哪一种装饰器修饰的组件可作为页面入口组件：  
A. @Component  
B. @Entry  
C. @Preview   
D. @Builder  
    
2. 下面属于ArkTS中正确使用变量声明的语句是？  
A. int a = 10;  
B. var a = 10;  
C. let a: number = 10;   
D. number a = 10;   
    
3. 下列关于ForEach循环渲染语法中参数说法错误的是？
A. arr表示数据源，为Array类型的数组，为必选参数  
B. arr可以设置为空数组，此时不会创建子组件  
C. itemGenerator为数组中的每个元素创建对应的组件，为必选参数  
D. keyGenerator为数据源arr的每个数组项生成唯一且持久的键值，为必选参数  
    
4. 下列关于if/else条件渲染说法错误的是？  
A. if、else if后跟随的条件语句不可以使用状态变量  
B. 允许在容器组件内使用，通过条件渲染语句构建不同的子组件  
C. 当父组件和子组件之间存在一个或多个if语句时，必须遵守父组件关于子组件使用的规则  
D. 支持if、else和else if语句  
    
 
5. HarmonyOS提供了一种访问控制机制即应用权限，用来保证这些数据或功能不会被不当或恶意使用。使用http发起网络请求，需要以下哪种权限？  
A. ohos.permission.USE_BLUETOOTH  
B. ohos.permission.INTERNET  
C. ohos.permission.REQUIRE_FORM  
D. ohos.permission.LOCATION  
    
6. 下列关于请求参数中method字段的请求方式的说法不正确的是：  
A. HEAD请求的响应格式与GET请求相同，只是响应主体为空，所以可以用于获取资源的元数据、检查资源是否存在。  
B. DELETE请求可以请求服务器删除指定的资源。  
C. GET请求可以向服务器获取资源，但GET请求不能够携带任何参数。  
D. POST请求向指定资源提交数据进行处理请求  
    
7. ArkTS Stage模型，关于其工程目录结构说法不正确的是：  
A. build-profile.json5用于存放应用级配置信息，包括签名、产品配置等  
B. oh-package.json5用于配置三方包声明文件的入口及包名  
C. module.json5包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息  
D. app.json5用于编写应用级编译构建任务脚本  
    
## 多选题（5分/题）：  
8. 下面哪些属于属性方法？  
A. fontSize()  
B. onClick()  
C. width()  
D. height()  
     
9. 下面属于ArkTS基础类型的是？  
A. string  
B. boolean  
C. number  
D. Object  
    
10. 下面示例中会导致编译报错的有？  
A. let x: number = null；  
B. let x: number | null = null；  
C. let y: string = null；  
D. let y: string = 100；  
    
 
## 编程题：
1.	（15分）Hello world项目增加按钮，点击后显示：Hello，哈工大！  
2.	（35分）完成ToDoList项目开发  
基础分20分  
时间分5分：首位提交得5分，第2位得4分，依次类推  
附加分10分：  
  * 数据持久化
  * 支持用户输入新增、删除待办事项
  * 其它自定义功能增强