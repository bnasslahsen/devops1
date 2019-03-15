import { NgModule } from '@angular/core';

import { Devops1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Devops1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Devops1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Devops1SharedCommonModule {}
