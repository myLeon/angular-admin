webpackJsonp([7],{1027:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(44),nga_module_1=__webpack_require__(264),forms_1=__webpack_require__(59),options_component_1=__webpack_require__(1272),options_routing_1=__webpack_require__(1463),options_service_1=__webpack_require__(425),OptionsModule=function(){function OptionsModule(){}return OptionsModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,forms_1.ReactiveFormsModule,nga_module_1.NgaModule,options_routing_1.routing],providers:[options_service_1.OptionsService],declarations:[options_component_1.Options]}),__metadata("design:paramtypes",[])],OptionsModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=OptionsModule},1272:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),forms_1=__webpack_require__(59),options_service_1=__webpack_require__(425),Options=function(){function Options(_fb,_optionsService){var _this=this;this._fb=_fb,this._optionsService=_optionsService,this.handleAuthChange=function(userAuthPromise){userAuthPromise.then(function(_a){var _b=_a.result,name=_b.name,slogan=_b.slogan,gravatar=_b.gravatar;_this.authForm.reset({name:name,slogan:slogan,gravatar:gravatar,password:"",new_password:"",rel_new_password:""})}).catch(function(error){})},this.handleOptionChange=function(optionPromise){optionPromise.then(function(_a){var options=_a.result;options.ping_sites=options.ping_sites.toString().replace(/,/g,"\n"),_this.optionForm.reset(options)}).catch(function(error){})},this.authForm=_fb.group({name:["",forms_1.Validators.compose([forms_1.Validators.required])],slogan:["",forms_1.Validators.compose([forms_1.Validators.required])],gravatar:["",forms_1.Validators.compose([forms_1.Validators.required])],password:[""],new_password:[""],rel_new_password:[""]}),this.name=this.authForm.controls.name,this.slogan=this.authForm.controls.slogan,this.gravatar=this.authForm.controls.gravatar,this.password=this.authForm.controls.password,this.new_password=this.authForm.controls.new_password,this.rel_new_password=this.authForm.controls.rel_new_password,this.optionForm=_fb.group({_id:[null],title:[""],sub_title:[""],keywords:[[]],description:[""],site_url:[""],site_email:["",forms_1.Validators.compose([forms_1.Validators.pattern("([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+")])],site_icp:[""],ping_sites:[[]]}),this._id=this.optionForm.controls._id,this.title=this.optionForm.controls.title,this.sub_title=this.optionForm.controls.sub_title,this.keywords=this.optionForm.controls.keywords,this.description=this.optionForm.controls.description,this.site_url=this.optionForm.controls.site_url,this.site_email=this.optionForm.controls.site_email,this.site_icp=this.optionForm.controls.site_icp,this.ping_sites=this.optionForm.controls.ping_sites}return Options.prototype.pingSitesChangeHandle=function(event){var newPingSites=event.target.value.replace(/\s+/g," ").replace(/\s/g,"\n");this.ping_sites.setValue(newPingSites)},Options.prototype.keywordsChangeHandle=function(event){var newWords=event.target.value.replace(/\s/g,"").split(",");this.keywords.setValue(newWords)},Options.prototype.submitAuthForm=function(values){this.authForm.valid&&this.putAuth(this.authForm.value)},Options.prototype.submitOptionForm=function(values){this.optionForm.valid&&(this.ping_sites.setValue(new String(this.ping_sites.value).split("\n")),this.putOptions(this.optionForm.value))},Options.prototype.getUserAuth=function(){this.handleAuthChange(this._optionsService.getUserAuth())},Options.prototype.putAuth=function(auth){this.handleAuthChange(this._optionsService.putAuth(auth))},Options.prototype.getOptions=function(){this.handleOptionChange(this._optionsService.getOptions())},Options.prototype.putOptions=function(options){this.handleOptionChange(this._optionsService.putOptions(options))},Options.prototype.ngOnInit=function(){this.getOptions(),this.getUserAuth()},Options=__decorate([core_1.Component({selector:"options",encapsulation:core_1.ViewEncapsulation.Emulated,styles:[__webpack_require__(1330)],template:__webpack_require__(1380)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof forms_1.FormBuilder&&forms_1.FormBuilder)&&_a||Object,"function"==typeof(_b="undefined"!=typeof options_service_1.OptionsService&&options_service_1.OptionsService)&&_b||Object])],Options);var _a,_b}();exports.Options=Options},1330:function(module,exports){module.exports=".option-form .blog-description,\n.option-form .blog-ping-sites {\n  height: 10em;\n  line-height: 1.8em; }\n\n.auth-form .auth-gravatar {\n  padding: 0;\n  display: inline-block;\n  width: 200px;\n  height: 200px; }\n"},1380:function(module,exports){module.exports='<div class="row">\n  <div class="col-md-6 col-xs-12">\n    <ba-card title="基本设置" baCardClass="with-scroll">\n      <div class="col-sm-12 col-xs-12">\n        <form class="form-horizontal option-form"\n              [formGroup]="optionForm" \n              (ngSubmit)="submitOptionForm(optionForm.value)">\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!title.valid && title.touched), \n                  \'has-success\': (title.valid && title.touched)\n                }">\n            <label for="blogTitle" class="col-sm-2 form-control-label">站点标题</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="blogTitle" \n                     placeholder="站点标题"\n                     [formControl]="title">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!sub_title.valid && sub_title.touched), \n                  \'has-success\': (sub_title.valid && sub_title.touched)\n                }">\n            <label for="blogSubTitle" class="col-sm-2 form-control-label">副标题</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="blogSubTitle" \n                     placeholder="副标题"\n                     [formControl]="sub_title">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!keywords.valid && keywords.touched), \n                  \'has-success\': (keywords.valid && keywords.touched)\n                }">\n            <label for="blogKeywords" class="col-sm-2 form-control-label">关键词</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="blogKeywords" \n                     placeholder="关键词"\n                     [formControl]="keywords"\n                     (change)="keywordsChangeHandle($event)">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!description.valid && description.touched), \n                  \'has-success\': (description.valid && description.touched)\n                }">\n            <label for="blogDescription" class="col-sm-2 form-control-label">描述</label>\n            <div class="col-sm-10">\n              <textarea type="text" \n                        class="form-control blog-description" \n                        id="blogDescription" \n                        placeholder="描述"\n                        [formControl]="description">\n              </textarea>\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!site_url.valid && site_url.touched), \n                  \'has-success\': (site_url.valid && site_url.touched)\n                }">\n            <label for="siteUrl" class="col-sm-2 form-control-label">站点地址</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="siteUrl" \n                     placeholder="站点地址（URL）"\n                     [formControl]="site_url">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!site_email.valid && site_email.touched), \n                  \'has-success\': (site_email.valid && site_email.touched)\n                }">\n            <label for="siteEmail" class="col-sm-2 form-control-label">电子邮件地址</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="siteEmail" \n                     placeholder="博客邮件地址"\n                     [formControl]="site_email">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!site_icp.valid && site_icp.touched), \n                  \'has-success\': (site_icp.valid && site_icp.touched)\n                }">\n            <label for="icpID" class="col-sm-2 form-control-label">ICP备案号</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="icpID" \n                     placeholder="如：陕ICP备0000000号"\n                     [formControl]="site_icp">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!ping_sites.valid && ping_sites.touched), \n                  \'has-success\': (ping_sites.valid && ping_sites.touched)\n                }">\n            <label for="pingSites" class="col-sm-2 form-control-label">SEO更新服务</label>\n            <div class="col-sm-10">\n              <textarea id="pingSites"\n                        class="form-control blog-ping-sites"\n                        placeholder="在发表新文章时，NodePress会自动通知站点更新服务。用换行分隔多个服务URL。"\n                        [formControl]="ping_sites"\n                        (change)="pingSitesChangeHandle($event)">\n              </textarea>\n            </div>\n          </div>\n          <hr>\n          <div class="form-group row">\n            <div class="offset-sm-2 col-sm-10">\n              <button type="submit" \n                      class="btn btn-default"\n                      [disabled]="!optionForm.valid">保存修改</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </ba-card>\n  </div>\n  <div class="col-md-6 col-xs-12">\n    <ba-card title="个人设置" baCardClass="with-scroll">\n      <div class="col-sm-12 col-xs-12">\n        <form class="form-horizontal auth-form"\n              [formGroup]="authForm" \n              (ngSubmit)="submitAuthForm(authForm.value)">\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!gravatar.valid && gravatar.touched), \n                  \'has-success\': (gravatar.valid && gravatar.touched)\n                }">\n            <label class="col-sm-2 form-control-label">个人头像</label>\n            <div class="col-sm-10">\n              <ba-picture-uploader class="form-control auth-gravatar" [formControl]="gravatar">\n              </ba-picture-uploader>\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!name.valid && name.touched), \n                  \'has-success\': (name.valid && name.touched)\n                }">\n            <label for="userName" class="col-sm-2 form-control-label">姓名</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="userName"\n                     placeholder="个人名字"\n                     [formControl]="name">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!slogan.valid && slogan.touched), \n                  \'has-success\': (slogan.valid && slogan.touched)\n                }">\n            <label for="userSlogan" class="col-sm-2 form-control-label">个人签名</label>\n            <div class="col-sm-10">\n              <input type="text" \n                     class="form-control" \n                     id="userSlogan" \n                     placeholder="个人签名"\n                     [formControl]="slogan">\n            </div>\n          </div>\n          <hr>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!password.valid && password.touched), \n                  \'has-success\': (password.valid && password.touched)\n                }">\n            <label for="userPassword" class="col-sm-2 form-control-label">旧密码</label>\n            <div class="col-sm-6">\n              <input type="password" \n                     class="form-control" \n                     id="userPassword" \n                     placeholder="输入旧密码"\n                     [formControl]="password">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!new_password.valid && new_password.touched), \n                  \'has-success\': (new_password.valid && new_password.touched)\n                }">\n            <label for="userNewPassword" class="col-sm-2 form-control-label">新密码</label>\n            <div class="col-sm-6">\n              <input type="password" \n                     class="form-control" \n                     id="userNewPassword" \n                     placeholder="输入新密码"\n                     [formControl]="new_password">\n            </div>\n          </div>\n          <div class="form-group row"\n                [ngClass]="{ \n                  \'has-error\': (!rel_new_password.valid && rel_new_password.touched), \n                  \'has-success\': (rel_new_password.valid && rel_new_password.touched)\n                }">\n            <label for="userRelNewPassword" class="col-sm-2 form-control-label">确认新密码</label>\n            <div class="col-sm-6">\n              <input type="password" \n                     class="form-control" \n                     id="userRelNewPassword" \n                     placeholder="确认新密码"\n                     [formControl]="rel_new_password">\n            </div>\n          </div>\n          <hr>\n          <div class="form-group row">\n            <div class="offset-sm-2 col-sm-10">\n              <button type="submit" \n                      class="btn btn-default"\n                      [disabled]="!authForm.valid">保存修改</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </ba-card>\n  </div>\n</div>\n'},1463:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(38),options_component_1=__webpack_require__(1272),routes=[{path:"",component:options_component_1.Options}];exports.routing=router_1.RouterModule.forChild(routes)}});