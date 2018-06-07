var StartSceneUIManager = UIManagerBase.extend({
    onCreate: function () {
        var initUIClassNameList = ["StartUI"];

        for(var x in initUIClassNameList){
            this.add_ui(initUIClassNameList[x].slice(0, initUIClassNameList[x].length - 2).toLowerCase() + "_ui", [], initUIClassNameList[x]);
        }
    }
});