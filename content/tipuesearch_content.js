var tipuesearch = {"pages": [{'title': 'About', 'text': '41023226 \n 倉儲: https://github.com/mdecad2022/site-41023226 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Cad2022', 'text': '\n', 'tags': '', 'url': 'Cad2022.html'}, {'title': 'w5', 'text': '\n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodue update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),\xa0 https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source\xa0 acp \xa0以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,\xa0 git config\xa0 --global user.email,\xa0 git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': '問題', 'text': '2b4g問題 \n', 'tags': '', 'url': '問題.html'}, {'title': 'w6-Test', 'text': 'Onshape \n \n NX \n \n', 'tags': '', 'url': 'w6-Test.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': '6203RS Bearing_step', 'text': 'https://cad.onshape.com/documents/3e2c37daac66d6e8b444b57c/w/2c19cf93845777202cf37535/e/7f03a2f68181b3a5cb637587?renderMode=0&uiState=63ad97a4ea089970486ea1bf \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': '6203RS Bearing_step.html'}, {'title': 'Ball bearing _ODC32-IDC12__step', 'text': 'https://cad.onshape.com/documents/e662c07256164653cc19d820/w/324eee2ca614a21883109aec/e/00ff44811c9ce77250317040?renderMode=0&uiState=63ad97e4ea089970486ea24c \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Ball bearing _ODC32-IDC12__step.html'}, {'title': 'base_clamp', 'text': 'Onshape \n https://cad.onshape.com/documents/d9703233a8dad22445a48945/w/67dee513f592404e233f8549/e/bf8d945ef7e7a432e0be89bc?renderMode=0&uiState=63ad3f8cbc31097010d5a1b1 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n NX \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'base_clamp.html'}, {'title': 'Base_step', 'text': 'https://cad.onshape.com/documents/7cc5ef28ad17287c5f2e8450/w/57751834ed89e3ab93c21c3c/e/5a0832581fa6733fac176468?renderMode=0&uiState=63ada004ea089970486eaabe \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Base_step.html'}, {'title': 'Bolt_1_step', 'text': 'https://cad.onshape.com/documents/cbc0ff85761e02b4e4a3fe20/w/58577017488d32f209d68dea/e/5b7a2fe6ef82bd92fae927e8?renderMode=0&uiState=63ada1695e62ba1d690c6bfb \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Bolt_1_step.html'}, {'title': 'Bolt_step', 'text': '\n https://cad.onshape.com/documents/d9ff0d9976ca7a8ab0039d7a/w/15822c7f193314e376684053/e/87a1d0e4db220ff8a9ab01ef?renderMode=0&uiState=63ada229ea089970486eac41 \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Bolt_step.html'}, {'title': 'Bottom safety guard_step', 'text': '\n https://cad.onshape.com/documents/99cc8dd08fce9ccd96a9f4d5/w/aecbb21317a3f8d990d7fd8a/e/78cb6520abe5410a399ed565?renderMode=0&uiState=63ada388bc31097010d65579 \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Bottom safety guard_step.html'}, {'title': 'Clamp_step', 'text': 'https://cad.onshape.com/documents/b1e4a3baa79aceb78eac6062/w/f7621fabd185794996390f81/e/578a1949c76c84f2618de095?renderMode=0&uiState=63ada4d1ea089970486eb05f \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Clamp_step.html'}, {'title': 'Column_step', 'text': '\n https://cad.onshape.com/documents/7087b286d435888572d28fa4/w/4386afe438400c90e7784544/e/4dbe00169629a91493af85de?renderMode=0&uiState=63ada584ea089970486eb0a2 \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Column_step.html'}, {'title': 'Drill chuck _B16 0.5-13mm__step', 'text': '\n https://cad.onshape.com/documents/be7c5d97b2ce5a49cec74351/w/5236034b9c9510a7921236bf/e/3ddb40460c5e3b5b8ee149d6?renderMode=0&uiState=63adabbabc31097010d65f2f \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Drill chuck _B16 0.5-13mm__step.html'}, {'title': 'Driven pulley_step', 'text': '\n https://cad.onshape.com/documents/5af9be8fd679ccbead632c18/w/4d5d1739e2607851e2707fd1/e/466fc62f010b7ad537f949b5?renderMode=0&uiState=63adaecc0ed7f0637fed6cc0 \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Driven pulley_step.html'}, {'title': 'Feed handle axle_step', 'text': '\n https://cad.onshape.com/documents/1fb053167cb80f5147e6a933/w/a2c021f9b3fab82cfc9bcdc8/e/1428bb30b5dffdffb38508c6?renderMode=0&uiState=63ae5975ea089970486faa20 \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'Feed handle axle_step.html'}, {'title': 'Knob axle_step', 'text': '\n https://cad.onshape.com/documents/6f3668268eabe01ad75032e3/w/9981d96e1437552698b63f27/e/8042b113a27cf1d0be15b9ce?renderMode=0&uiState=63ae5dd10ed7f0637fedec67 \n \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Knob axle_step.html'}, {'title': 'Motor tensioner clamp_step', 'text': '\n https://cad.onshape.com/documents/12004fc1ad75fb5e783e2b58/w/349a76d04c40d52c6d504e1a/e/b690a83a4af155e546f327dc?renderMode=0&uiState=63aedc9dbc31097010d86a70 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Motor tensioner clamp_step.html'}, {'title': 'Motor tensioner_step', 'text': '\n https://cad.onshape.com/documents/5c9fe7563d8b865543d07a65/w/679e4d6097550a038079dcd9/e/18445df764de8caa1c64077a?renderMode=0&uiState=63aedfcbbc31097010d86fcc \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'Motor tensioner_step.html'}, {'title': 'Part 1_1_step', 'text': '\n https://cad.onshape.com/documents/f7cea9139a6d386e9df586ed/w/c15432b4476baa7ddd02c506/e/e24104bf01c04b6f1a1e3d66?renderMode=0&uiState=63b136d4560e536b8a7dabd5 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Part 1_1_step.html'}, {'title': 'Part 1_step', 'text': '\n https://cad.onshape.com/documents/deaacd2d910531239cadedc0/w/cfde9e20a7fa02bd13e5bbe4/e/92400cf04bf5703bbed7b94a?renderMode=0&uiState=63b1380fbc31097010dabdd8 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Part 1_step.html'}, {'title': 'Pulley_step', 'text': '\n https://cad.onshape.com/documents/d40d877c2b6311a053b18acf/w/63145cfb9edb8bfc49f7b066/e/72d5413502fecbf1baa0f13e?renderMode=0&uiState=63b1398aad5686298e2120b8 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Pulley_step.html'}, {'title': 'Rubber gasket_step', 'text': '\n https://cad.onshape.com/documents/cd8da20f50c900209f7850bc/w/ce5c6080d0791246c29968aa/e/2cfd8152c4b4269f06860370?renderMode=0&uiState=63b14434ad5686298e212537 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Rubber gasket_step.html'}, {'title': 'Rubber knob_step', 'text': '\n https://cad.onshape.com/documents/5120580fb51c7d6f5213061b/w/3f39c89834b1f163e1564161/e/3abba1f0bb0f7de73b9e838f?renderMode=0&uiState=63b14762ad5686298e212c3c \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Rubber knob_step.html'}, {'title': 'Spindle guide_step', 'text': '\n https://cad.onshape.com/documents/eaa94fc1ffbe5d16ea4e3c15/w/c1bbe60d18d037c0084520bf/e/589ac93085a2b9069beb5e75?renderMode=0&uiState=63b1558abc31097010dae534 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spindle guide_step.html'}, {'title': 'Spindle lock screw and nut_step', 'text': '\n https://cad.onshape.com/documents/21c5e0226e760de0f8fa49b3/w/45c957f18014304bdffb0b45/e/40ea19ba1c5c2c16d7854fba?renderMode=0&uiState=63b17015ad5686298e21504d \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spindle lock screw and nut_step.html'}, {'title': 'Spindle_step', 'text': '\n https://cad.onshape.com/documents/6ee4af88cf097618853de1c0/w/d6028fdc58c84b920f0a9a18/e/af26451d252ace13af178893?renderMode=0&uiState=63b17710bc31097010db0b81 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spindle_step.html'}, {'title': 'Spline guider_step', 'text': '\n https://cad.onshape.com/documents/a1785685f512c79dc71cffa1/w/a12b13b328dd90b527b5642a/e/d588598c15d67f10f72b36fd?renderMode=0&uiState=63b181b0ad5686298e21709e \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spline guider_step.html'}, {'title': 'Spring cap_step', 'text': '\n https://cad.onshape.com/documents/c9aab73c9555cc672d47e961/w/881db3c05ea53139cc6c2720/e/3ecab2b19fd5a555e05bab5e?renderMode=0&uiState=63b18360ad5686298e217394 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spring cap_step.html'}, {'title': 'Spring nut_step', 'text': '\n https://cad.onshape.com/documents/33d4af1173f3b5a53d8428a7/w/146222a78ba72635f26c3745/e/2b1791675353e91c095012a9?renderMode=0&uiState=63b1844f5e62ba1d691212e8 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Spring nut_step.html'}, {'title': 'Start Stop_step', 'text': '\n https://cad.onshape.com/documents/c8def5d6b64ead7d21548325/w/d7e2a485d5cc3c1ae17c5ffd/e/b4debb999dba7d2ed15b38fb?renderMode=0&uiState=63b18ab6560e536b8a7de77e \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Start Stop_step.html'}, {'title': 'Table clamp_step', 'text': '\n https://cad.onshape.com/documents/0f541090acb08679be29dc18/w/cb8a22de078edb5901820ff3/e/1e02403471b55290d934e419?renderMode=0&uiState=63b19c0fbc31097010db3330 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Table clamp_step.html'}, {'title': 'Table_step', 'text': '\n https://cad.onshape.com/documents/302f2b9aa34bd237b4f15b49/w/67b2286ad1e7b4e8ea47762c/e/1043c03d806cc0f100dba321?renderMode=0&uiState=63b1a7ec5e62ba1d69125bf0 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Table_step.html'}, {'title': 'Top safety guard_step', 'text': '\n https://cad.onshape.com/documents/35a4931ae49185f6574d8fca/w/d9b3ec64edd795435f77d9ff/e/2f0c609b7eb2fb4311dd4737?renderMode=0&uiState=63b1abc85e62ba1d6912629f \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n', 'tags': '', 'url': 'Top safety guard_step.html'}, {'title': 'w10', 'text': 'hw10 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': 'hw11 hw11-2 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  w11 開始  \n \n \n  w11 結束 \n  w11-2 開始  \n \n \n  w11-2 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置 ', 'tags': '', 'url': 'w11.html'}, {'title': 'w13', 'text': '1 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 2 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 3 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 4 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n onelink.simscene \n', 'tags': '', 'url': 'w13.html'}, {'title': 'W14', 'text': 'hw14 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'solvespace', 'text': '\n \n sovlespace test \n', 'tags': '', 'url': 'solvespace.html'}, {'title': 'NX', 'text': '\n \n NX test \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Onshape', 'text': 'https://cad.onshape.com/documents/d9703233a8dad22445a48945/w/67dee513f592404e233f8549/e/bf8d945ef7e7a432e0be89bc?renderMode=0&uiState=63ad40e5bc31097010d5a406 \n \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'W15', 'text': '\n \n solvespace w15 \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n two_link.simscene \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '\n \n 更改尺寸 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 彈珠檯', 'tags': '', 'url': 'W16.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};