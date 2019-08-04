/**
 *  @param { Linux_API } linuxStudy
 * 
 * 
 *    
 *  安装 vritualBox 虚拟机 
 *  Linux 安装 centOS 7.4版本
 *  yum install package_name 下载并安装一个rpm包
 *  
 *  FHS协议 (File Syslem Sierarctiy Standard) 
 * 
 *  安装wget -> node 
 *  将node ln -s~ 超链接到 root/usr/bin/下
 *  
 * 
 *  Linux_API: {
 *      xz -d, 解压 .xz后缀文件
 *      tar -xf, 解压.tar后缀文件
 *      mkdir [test_name], 创建文件
 *      mkdir [tests_name], 创建文件夹
 *      rmdir [test_name], 删除文件
 *      rm -rf [tests_name], 删除当前文件夹里的所有东西 (慎用)
 *      mkdri -m 给文件赋予权限
 *      pwd 展示当前路径在绝对路径下的样子
 *      vi [package] 打开文件 
 *      :wq 保存退出 :q!强制退出
 *      tail 查看文件后十行
 *      tail -f 同上 能使实时刷新
 *      chmod 赋予权限
 *      .sh 创建可执行的文件
 *       lscpu 查看主机详情
 *       df -h 查看磁盘空间
 *       df -i 查看磁盘索引空间
 *       ps aux 查看进程
 *       ps aux |grep '[text]' 筛选查看进程
 * 
 * 
 *      @param { user }
 *      useradd user_name 创建用户
 *      groupadd users_name 创建用户组
 *      ssh user_name@localhost  远程连接用户
 *      cat /etc/passwd 查看创建的用户
 *      cat /etc/group  查看用户组
 *      useradd -G users_name new_user_name 在用户组下创建新的用户
 *      groupdel 删除用户组 
 *      userdel 删除用户
 *      groups 查看用户在哪个用户组 
 *      whoami 同上
 *      cat [test] :grep 'text' 查找当前文件中与文本匹配的内容 :grep 可以和很多命令搭配 进行筛选 *
 *      id [users_name] 查看用户组的详情
 *      groupmod [users_name] [user_name] 修改某个组里的一个用户
 *      su (sudo) 切换用户 exit 退出
 *  }
 * 
 * 例: 1:drwxrwxr-x 
 *     2:-rw-r--r-- 等
 * 文件权限 {
 *      第一个字符: 路径还是文件(d: 路径, -: 文件) 
 *      往后 分三组 每组三个字符 
 *      第一组 : 当前所属用户权限 
 *      第二组 : 当前所属组的权限
 *      第三组 : 其他用户的权限
 *      ...
 *       R --> 读取 == 4
 *       w --> 写入 == 2
 *       x --> 执行 == 1
 *      可以组合 每一组 分别有 rwx(421) 可以累加 
 *      
 *      例如: 第一组 只能读 就是 4; 既能读写 有能执行 就是 7 
 *      可以写成  mkdir -m 777 [test_name]
 * }
 * 
 */
//结束与2019/08/03