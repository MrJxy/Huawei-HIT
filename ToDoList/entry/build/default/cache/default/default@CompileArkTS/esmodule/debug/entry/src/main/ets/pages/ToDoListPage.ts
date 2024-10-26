if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToDoListPage_Params {
    totalTasks?: Array<string>;
}
import DataModel from "@bundle:com.huawei.todolist/entry/ets/viewmodel/DataModel";
import CommonConstants from "@bundle:com.huawei.todolist/entry/ets/common/constant/CommonConstant";
class ToDoListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.totalTasks = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToDoListPage_Params) {
        if (params.totalTasks !== undefined) {
            this.totalTasks = params.totalTasks;
        }
    }
    updateStateVars(params: ToDoListPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private totalTasks: Array<string>;
    aboutToAppear() {
        this.totalTasks = DataModel.getData();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: CommonConstants.COLUMN_SPACE });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ToDoListPage";
    }
}
registerNamedRoute(() => new ToDoListPage(undefined, {}), "", { bundleName: "com.huawei.todolist", moduleName: "entry", pagePath: "pages/ToDoListPage", pageFullPath: "entry/src/main/ets/pages/ToDoListPage", integratedHsp: "false" });
