angular.module('ctcaeApp', ['ionic', 'jett.ionic.filter.bar', 'ui.router', 'ng-sortable', 'barcode', 'angular-barcode'])
    .controller('HomeCtrl', ["$scope", "$timeout", "$state", "$window", "sharedService", "$ionicScrollDelegate", "$ionicFilterBar", "$ionicSideMenuDelegate", "$ionicLoading", "$ionicPopup", function ($scope, $timeout, $state, $window, sharedService, $ionicScrollDelegate, $ionicFilterBar, $ionicSideMenuDelegate, $ionicLoading, $ionicPopup) {
        $scope.shareData = sharedService;
        var selected = [1, 3, 5, 7];
        var filteredItems = proctcae.filter(function (val) {
            return selected.includes(val.id);
        });
        var filteredItems2 = proctcae.filter(function (val) {
            return !selected.includes(val.id);
        });
        $scope.shareData.elements = filteredItems;
        $scope.shareData.elements2 = filteredItems2;
        var el1 = document.getElementById('list1');
        var el2 = document.getElementById('list2');
        var removeItem;
        var homeElements = [];
        Sortable.create(el1, {
            group: 'todo',
            animation: 150,
            onChange: function ( /**Event*/ evt) {
                homeElements = $scope.shareData.elements2.filter(function (val) {
                    return val.id != removeItem;
                });
                console.log('list2 > list1 change', homeElements);
            }
        });
/*
        $scope.cancell = function (evt) {
            try {
                evt.preventDefault();
                evt.stopPropagation();
            } catch (e) {

            }
        }
*/
        Sortable.create(el2, {
            group: 'todo',
            animation: 150,
            onStart: function ( /**Event*/ evt) {
                evt.preventDefault();
                evt.stopPropagation();
                removeItem = Number(evt.item.getAttribute('id'));
            },
            onRemove: function ( /**Event*/ evt) {
                evt.preventDefault();
                evt.stopPropagation();
                $timeout(function () {
                    $scope.shareData.elements2 = angular.copy(homeElements);
                    if ($scope.searchText) {
                        $scope.searchText = undefined;
                    }
                })
            },
            onChange: function ( /**Event*/ evt) {
                evt.preventDefault();
                evt.stopPropagation();
                if ($scope.searchText) {
                    $scope.searchText = undefined;
                }
            }
        });

        $scope.changed = function (text) {
            if (text == "") {
                $scope.searchText = undefined;
            }
        }

        $scope.start = function (event) {
            return false;
        }

        $scope.setGrade = function (item, index) {
            item.selected = index;
        }

        $scope.height = function (id) {
            return document.getElementById(id).offsetHeight
        }

        $scope.toggleDrawer = function () {
            $scope.toggleStatus = !$scope.toggleStatus;
        }

        $scope.shareData.element = function (ele) {
            return ele.items.some(function(item) {
                return (item.selected || item.selected === 0)
            });
        }

        var appWindow = angular.element($window);

        appWindow.bind('resize', function () {
            $scope.windowheight = document.getElementById('ref').offsetHeight;
            console.log('Resized your browser', $scope.windowheight);
        });

        $scope.initialize = function (items) {
            if (items[0].selected === 0) {
                try {
                    items[1].selected = undefined;
                    items[2].selected = undefined;
                } catch (e) {

                }
            }
        }



        if (!$scope.shareData.flags) {
            $scope.shareData.flags = {};
        }

        $scope.shareData.secondaryOn = true; //bilingual setting

        $scope.$on('$ionicView.beforeLeave', function (e) {
            try {
                document.getElementById('filterBar').style.display = 'none';
            } catch (e) {
                console.log(e);
            }
        });
        $scope.$on('$ionicView.beforeEnter', function (e) {
            try {
                $scope.shareData.flagNum = Object.keys($scope.shareData.flags).length;
                document.getElementById('filterBar').style.display = 'inherit';

            } catch (e) {
                console.log(e);
            }

        });
        $scope.$on('$ionicView.afterEnter', function () {
            /*
                        var getFirstBrowserLanguage = function () {
                            var nav = window.navigator,
                                browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                                i,
                                language;

                            // support for HTML 5.1 "navigator.languages"
                            if (Array.isArray(nav.languages)) {
                                for (i = 0; i < nav.languages.length; i++) {
                                    language = nav.languages[i];
                                    if (language && language.length) {
                                        return language;
                                    }
                                }
                            }

                            // support for other well known properties in browsers
                            for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                                language = nav[browserLanguagePropertyKeys[i]];
                                if (language && language.length) {
                                    return language;
                                }
                            }

                            return null;
                        };
                        if ($scope.shareData.secondaryOn) {
                            if (getFirstBrowserLanguage() === 'ja') {
                                $scope.shareData.lang = 'ja';
                                $scope.shareData.langJa = true;
                            } else {
                                $scope.shareData.lang = 'en';
                                $scope.shareData.langJa = null;
                            }
                        } else {
                            $scope.shareData.lang = 'en';
                            $scope.shareData.langJa = null;
                        }
            */
        });

        $scope.freezeScroll = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').getScrollView().options.scrollingY = false;
        }
        $scope.enableScroll = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').getScrollView().options.scrollingY = true;
        }
        //////////////////////////////
        ////// launguage settings 
        //////////////////////////////

        $scope.shareData.local = {
            en: {
                all: "All",
                flagged: "Flagged",
                back: "Back",
                search: "Search",
                cancel: "Cancel",
                def: "Definition",
                nav: "Navigational Note"
            },
            ja: {
                all: "すべて",
                flagged: "フラグ付き",
                back: "戻る",
                search: "検索",
                cancel: "キャンセル",
                def: "定義",
                nav: "検索上の注意"
            }
        };
        $scope.socTitle = {
            en: $scope.shareData.local['en']['all'],
            ja: $scope.shareData.local['ja']['all']
        };
        //$scope.shareData.secondaryOn = true;
        $scope.shareData.lang = 'ja';
        $scope.shareData.langJa = true;
        /*
        $scope.shareData.changeLang = function () {
            if ($scope.shareData.secondaryOn) {
                if ($scope.shareData.lang === 'ja') {
                    $scope.shareData.lang = 'en';
                } else {
                    $scope.shareData.lang = 'ja';
                    $scope.shareData.langJa = true;
                }
            } else {
                $scope.shareData.lang = 'en';
            }
        }
        */

        //////////////////////////////
        ////// search filter
        //////////////////////////////

        $scope.showFilterBar = function () {
            if ($ionicSideMenuDelegate.isOpen()) {
                $ionicSideMenuDelegate.toggleLeft();
            }
            filterBarInstance = $ionicFilterBar.show({
                cancel: function () {
                    $scope.shareData.search = '';
                }
            });
        };
        //////////////////////////////
        ////// data loading
        //////////////////////////////
        /*
                $scope.shareData.headerKeys = Object.keys(test[0]);
                $scope.shareData.headerValues = Object.values(test[0]);
                $scope.shareData.rawList = angular.copy(test.slice(1));
                $scope.shareData.itemList = $scope.shareData.rawList;

                // title subtitle group setting
                $scope.shareData.unique = "__rowNum__"; // meddra
                $scope.shareData.term = null;
                $scope.shareData.subterm = null;
                $scope.shareData.group = null;
                var group = null;

                $scope.shareData.headerValues.forEach((val, i) => {
                    if (val.includes("[T]") && !$scope.shareData.term){
                        $scope.shareData.term = $scope.shareData.headerKeys[i];
                    } else if (val.includes("[S]") && !$scope.shareData.subterm){
                        $scope.shareData.subterm = $scope.shareData.headerKeys[i];
                    } else if (val.includes("[G]") && !$scope.shareData.group){
                        $scope.shareData.group = $scope.shareData.headerKeys[i];
                        group = $scope.shareData.headerKeys[i];
                    }
                })
                if (!$scope.shareData.term) {
                    $scope.shareData.term = "A";
                }

                $scope.shareData.group = "B"; //"soc";
                var group = "B";

                // making group list

                if ($scope.shareData.group){
                    $scope.shareData.groupList = $scope.shareData.rawList.map(function (element) {
                        return element[group];
                    }).filter(function (x, i, self) {
                        return self.map(function (val) {
                            return val;
                        }).indexOf(x) === i;
                    }).sort();

                    var divAdded = [];
                    $scope.shareData.rawList.sort((a,b) =>{
                        return a[group].localeCompare(b[group]) || a[$scope.shareData.term].localeCompare(b[$scope.shareData.term]);
                    });
                    for (item of $scope.shareData.groupList) {
                        console.log(item)
                        var pos = $scope.shareData.itemList.map(function (element) {
                            return element[group];
                        }).indexOf(item);
                        divAdded.unshift(pos);
                    }
                    for (i in divAdded) {
                        var insert = {}
                        insert[$scope.shareData.term] = $scope.shareData.rawList[divAdded[i]][group];
                        insert[group] = false;
                        $scope.shareData.rawList.splice(divAdded[i], 0, insert);
                    }
                } else {
                    $scope.shareData.rawList.sort((a,b) =>{
                        return a[$scope.shareData.term].localeCompare(b[$scope.shareData.term]);
                    });
                }

                $scope.getItemHeight = function (item) {
                    return item[group] ? 44 : 30;
                };

                // filterd list

                $scope.shareData.filteredList = function () {
                   
                    if ($scope.shareData.search) {
                        $scope.shareData.target = $scope.shareData.itemList.filter(function (item, i, self) {
                            return $scope.shareData.headerKeys.some(function (key) {
                                if (!item[$scope.shareData.unique]){
                                    return true;
                                } else {
                                    return item[key].toLowerCase().indexOf($scope.shareData.search.toLowerCase()) > -1;
                                }
                            });
                        });
                        return $scope.shareData.target.filter(function (item, index, self) {
                            try {
                                return (!item[group] && item[$scope.shareData.term] === self[index + 1][group]) || item[group];
                            } catch (e) {
                                console.log('no data in a category');
                            }
                        });
                    } else {
                        return $scope.shareData.itemList;
                    }
                };
        */
        $scope.shareData.encode = function (obj, key) {
            try {
                /*
                if (key) {
                    var str = String(obj[key + ($scope.shareData.lang === 'ja' ? 'ja' : '')]);
                } else {
                    var str = String(obj[key]);
                }*/
                var str = key ? String(obj[key]) : String(obj); //String(obj[key]);
                var i = String(str).length,
                    a = [];
                while (i--) {
                    var iC = str[i].charCodeAt();
                    if (str[i] === "\"") {
                        a[i] = "&quot;";
                    } else if (str[i] === "&") {
                        a[i] = "&amp;";
                    } else if (iC === 62) {
                        a[i] = "&gt;";
                    } else if (iC === 60) {
                        a[i] = "&lt;";
                    } else {
                        a[i] = str[i];
                    }
                }
                return a.join('');
            } catch (e) {
                console.log(e);
            }
        };

        $scope.scrollTop = function () {
            $ionicScrollDelegate.scrollTop(false);
        };

        $scope.toggleLeft = function () {
            $ionicScrollDelegate.scrollTop(false);
            $scope.shareData.search = '';
            $ionicSideMenuDelegate.toggleLeft();
            $scope.shareData.flagNum = Object.keys($scope.shareData.flags).length;
        };

        $scope.flagging = function (id, e) {
            console.log(id)
            e.preventDefault();
            e.stopPropagation();
            if (!$scope.shareData.flags[id]) {
                $scope.shareData.flags[id] = true;
            } else {
                delete $scope.shareData.flags[id];
            }
            $scope.shareData.putDb('flags', $scope.shareData.flags);
            $scope.shareData.flagNum = Object.keys($scope.shareData.flags).length;
        }
        /*

                $scope.getItem = function (id) {
                    console.log(id);
                    if (id) {
                        $scope.shareData.detail = $scope.shareData.itemList.filter(function (item) {
                            return String(item[$scope.shareData.unique]) === String(id);
                        });
                        $state.go('tabs.detail');
                    } else {
                        e.preventDefault();
                    }
                    console.log($scope.shareData.detail);
                }

                $scope.getGroupItems = function (str) {
                    if (str) {
                        $scope.groupTitle = {
                            en: str,
                            ja: str
                        };
                        $scope.shareData.itemList = $scope.shareData.rawList.filter(function (item) {
                            return item[group] === str;
                        });
                            var insert = {}
                            insert[$scope.shareData.term] = str;
                            insert[group] = false;
                            $scope.shareData.itemList.unshift(insert);

                    } else {
                        $scope.socTitle = {
                            en: $scope.shareData.local['en']['all'],
                            ja: $scope.shareData.local['ja']['all']
                        };
                        $scope.shareData.itemList = $scope.shareData.rawList;
                    }
                    $ionicSideMenuDelegate.toggleLeft();
                    $timeout(function () {
                        $ionicScrollDelegate.scrollTop(false);
                    }, 300)
                }
        */
        $scope.getFlag = function () {
            var flagList = Object.keys($scope.shareData.flags);
            $scope.shareData.itemList = $scope.shareData.rawList.filter(function (item) {
                if (!item[group]) {
                    return true;
                }
                for (i in this) {
                    if (this[i] === item[$scope.shareData.unique]) {
                        return item;
                    }
                }

            }, flagList).filter(function (item, index, self) {
                try {
                    return (!item[group] && item[$scope.shareData.term] === self[index + 1][group]) || item[group];
                } catch (e) {
                    console.log('no data in a category');
                }
            });
            $scope.socTitle = {
                en: '<i class="icon ion-ios-flag red-flag head"></i>' + $scope.shareData.local['en']['flagged'],
                ja: '<i class="icon ion-ios-flag red-flag head"></i>' + $scope.shareData.local['ja']['flagged']
            };

            $ionicSideMenuDelegate.toggleLeft();
            $timeout(function () {
                $ionicScrollDelegate.scrollTop(false);
            }, 300)
        }


        var dbName = 'ctcaeDB';
        var storeName = 'flagStore';

        $scope.shareData.putDb = function (setname, value) {

            var openReq = indexedDB.open(dbName);
            openReq.onsuccess = function (event) {
                var db = event.target.result;
                var trans = db.transaction(storeName, 'readwrite');
                var store = trans.objectStore(storeName);

                var putReq = store.put({
                    id: setname,
                    contents: value
                });

                putReq.onsuccess = function () {
                    console.log('put data success');
                }

                trans.oncomplete = function () {
                    console.log('transaction completed');
                }
                db.close();
            }
            openReq.onerror = function (event) {
                console.log('db open error');
            }
        }

        getDb('flags');
        //getDb('regimens');

        //console.log(new File("../assets/test.xlsx"))

        function getDb(setname) {
            var openReq = indexedDB.open(dbName);
            openReq.onupgradeneeded = function (event) {
                var db = event.target.result;
                db.createObjectStore(storeName, {
                    keyPath: 'id'
                });
            }
            openReq.onsuccess = function (event) {
                var db = event.target.result;
                var trans = db.transaction(storeName, 'readonly');
                var store = trans.objectStore(storeName);
                var getReq = store.get(setname);

                getReq.onsuccess = function (event) {
                    switch (setname) {
                        case "flags":
                            try {
                                $scope.shareData.flags = event.target.result.contents; // {id : 'A1', name : 'test'}
                                $scope.shareData.flagNum = Object.keys($scope.shareData.flags).length;
                            } catch (e) {
                                console.log('error', e);
                            }
                            break;
                        case "regimens":
                            try {
                                $scope.shareData.itemList = event.target.result.contents; // {id : 'A1', name : 'test'}
                                //$scope.shareData.flagNum = Object.keys($scope.shareData.flags).length;
                            } catch (e) {
                                console.log('error', e);
                            }
                            // code block
                            break;
                        default:
                            // code block
                    }
                }

                getReq.onerror = function (event) {
                    console.log('db not exist');
                }
            }
            openReq.onerror = function (event) {
                $scope.shareData.putDb(setname, $scope.shareData.flags);
            }
        }

        //removeDb('ctcaelite');

        $scope.shareData.dbremove = function (dbName) {
            removeDb(dbName);
        }

        function removeDb(dbName) {
            var deleteReq = indexedDB.deleteDatabase(dbName);
            deleteReq.onsuccess = function (event) {
                console.log('db delete success');

            }
            deleteReq.onerror = function () {
                console.log('db delete error');
            }
        }

        /*
        browsercheck();

        function browsercheck() {
            var message = false;
            if (bowser.safari) {
                message = bowser.check({
                    safari: "11.1"
                });
            } else if (bowser.ios) {
                message = bowser.check({
                    ios: "11.3"
                });
            } else if (bowser.chrome) {
                message = bowser.check({
                    chrome: "45"
                });
            } else if (bowser.android) {
                message = true;
            } else if (bowser.msedge) {
                message = bowser.check({
                    msedge: "17"
                });
            } else if (bowser.firefox) {
                message = bowser.check({
                    firefox: "44"
                });
            } else if (bowser.opera) {
                message = bowser.check({
                    opera: "32"
                });
            } else {
                message = false;
            }
            if (!message) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Browser not supported',
                    template: 'Your browser may not be compatible fully. Please consider to use the latest version of Chrome, Safari, Firefox or Edge.'
                });
                alertPopup.then(function (res) {
                    console.log('');
                });
            }

        }
*/
    }])

    .controller('DetailCtrl', ["$scope", "sharedService", function ($scope, sharedService) {
        $scope.shareData = sharedService;

    }])
    .controller('SearchCtrl', ["$scope", "sharedService", function ($scope, sharedService) {
        $scope.shareData = sharedService;

    }])
    .controller('PsCtrl', ["$scope", "sharedService", function ($scope, sharedService) {
        $scope.shareData = sharedService;
        $scope.$on('$ionicView.enter', function (e) {
            try {
                document.getElementById('filterBar').style.display = 'none';
            } catch (e) {
                console.log(e);
            }
        });

        $scope.shareData.fileNameChanged = function (event) {
            var files = event.target.files;
            var f = files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var wb;
                var arr = fixdata(data);
                wb = XLSX.read(btoa(arr), {
                    type: 'base64',
                    cellDates: true,
                });

                var output = "";
                output = to_json(wb);
                console.log(output);
                $scope.shareData.itemList = output;
                $scope.shareData.unique = "__rowNum__"; // meddra
                $scope.shareData.term = "A"; // term
                $scope.shareData.group = "B"; //"soc";
                var group = "B";

                // making soc list

                $scope.shareData.groupList = $scope.shareData.itemList.map(function (element) {
                    return element["B"];
                }).filter(function (x, i, self) {
                    return self.map(function (val) {
                        return val;
                    }).indexOf(x) === i;
                }).sort();

                var divAdded = [];
                $scope.shareData.itemList.sort(function(a, b) {
                    return a["B"].localeCompare(b["B"]) || a["A"].localeCompare(b["A"]);
                });

                $scope.shareData.groupList.forEach(function(item) {
                    var pos = $scope.shareData.itemList.map(function (element) {
                        return element["B"];
                    }).indexOf(item);
                    divAdded.unshift(pos);
                });
                for (var i in divAdded) {
                    $scope.shareData.itemList.splice(divAdded[i], 0, {
                        A: $scope.shareData.itemList[divAdded[i]]["B"],
                        B: false,
                    });
                }
                //$scope.shareData.putDb("regimens", output[0]);
            };

            reader.readAsArrayBuffer(f);
        };

        // ファイルの読み込み
        function fixdata(data) {
            var o = "",
                l = 0,
                w = 10240;
            for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w,
                l * w + w)));
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        }

        // ワークブックのデータをjsonに変換
        function to_json(workbook) {
            /*
            var result = {};
            workbook.SheetNames.forEach(function (sheetName) {
                var roa = XLSX.utils.sheet_to_json(
                    workbook.Sheets[sheetName], {
                        //raw: true,
                        header: "A"
                    });
                if (roa.length > 0) {
                    result[sheetName] = roa;
                }
            });
            return result;
            */
            var roa = XLSX.utils.sheet_to_json(
                workbook.Sheets[workbook.SheetNames[0]], {
                    raw: true,
                    header: "A"
                });
            if (roa.length > 0) {
                return roa;
            } else {
                return undefined;
            }
        }
        $scope.options = {
            width: 2,
            height: 40,
            quite: 1,
            displayValue: true,
            font: "monospace",
            textAlign: "center",
            fontSize: 12,
            backgroundColor: "",
            lineColor: "#000"
        };
        $scope.options2 = {
            format: 'CODE128',
            lineColor: '#000000',
            width: 2,
            height: 40,
            displayValue: true,
            fontOptions: '',
            font: 'monospace',
            textAlign: 'center',
            textPosition: 'bottom',
            textMargin: 1,
            fontSize: 12,
            background: '#ffffff',
            margin: 0,
            marginTop: undefined,
            marginBottom: undefined,
            marginLeft: undefined,
            marginRight: undefined,
            valid: function (valid) {}
        }

        $scope.anscheck = function (ele) {
            text = String(ele.id);
            ele.items.forEach(function(item) {
                text = text + "q" + item.q + "s" + (item.selected === undefined ? "x" : item.selected);
            })

            return text;
        }

    }])
    .controller('InfoCtrl', ["$scope", "sharedService", "$ionicPopup", function ($scope, sharedService, $ionicPopup) {
        $scope.shareData = sharedService;
        $scope.$on('$ionicView.enter', function (e) {
            try {
                document.getElementById('filterBar').style.display = 'none';
            } catch (e) {
                console.log(e);
            }
        });
        $scope.shareData.removeFlags = function () {

            var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Flags',
                template: 'Are you sure you want to remove all flags?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    var none = {};
                    $scope.shareData.flags = none;
                    $scope.shareData.putDb('flags', none);
                } else {
                    console.log('You are not sure');
                }
            });
        }

        $scope.shareData.unregister = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Unregister / Remove Cashe',
                template: 'Are you sure you want to unregister Service Worker and remove Cashe?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    swUnregister();
                } else {
                    console.log('You are not sure');
                }
            });
        }

    }])

    .config(["$stateProvider", "$urlRouterProvider", "$ionicFilterBarConfigProvider", function ($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tabs",
                abstract: true,
                templateUrl: "tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'tabs-home': {
                        templateUrl: "templates/home.min.html"
                    }
                }
            })
            .state('tabs.detail', {
                url: "/detail",
                views: {
                    'tabs-home': {
                        templateUrl: "templates/detail.min.html"
                    }
                }
            })
            .state('tabs.info', {
                url: "/info",
                views: {
                    'tabs-info': {
                        templateUrl: "templates/info.min.html"
                    }
                }
            })
            .state('tabs.privacy', {
                url: "/privacy",
                views: {
                    'tabs-info': {
                        templateUrl: "templates/privacy.min.html"
                    }
                }
            })
            .state('tabs.term', {
                url: "/term",
                views: {
                    'tabs-info': {
                        templateUrl: "templates/term.min.html"
                    }
                }
            })
            .state('tabs.third', {
                url: "/third",
                views: {
                    'tabs-info': {
                        templateUrl: "templates/third.min.html"
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'tabs-about': {
                        templateUrl: "templates/about.min.html"
                    }
                }
            })
            .state('tabs.install', {
                url: "/install",
                views: {
                    'tabs-info': {
                        templateUrl: "templates/install.min.html"
                    }
                }
            });
        $urlRouterProvider.otherwise("/tabs/home");
        $ionicFilterBarConfigProvider.backdrop(true);

    }]).factory("sharedService", function () {
        return {
            text: 'sharedService'
        };
    }).filter('highlight', ["$sce", function ($sce) {
        return function (text, phrase) {
            function Encode(string) {
                var i = string.length,
                    a = [];

                while (i--) {
                    var iC = string[i].charCodeAt();
                    if (string[i] === "\"") {
                        a[i] = "&quot;";
                    } else if (string[i] === "&") {
                        a[i] = "&amp;";
                    } else if (iC === 62) {
                        a[i] = "&gt;";
                    } else if (iC === 60) {
                        a[i] = "&lt;";
                    } else {
                        a[i] = string[i];
                    }
                }
                return a.join('');
            }

            function Escaping(string) {
                var i = string.length,
                    a = [];
                while (i--) {
                    if (["[", "\\", "^", "$", ".", "|", "?", "*", "+", "(", ")"].some(function (val) {
                            return val === string[i];
                        })) {
                        a[i] = "\\" + string[i];
                    } else {
                        a[i] = string[i];
                    }
                }
                return a.join('');
            }
            if (text) {
                if (phrase) {
                    text = text.replace(new RegExp('(' + Escaping(Encode(phrase)) + ')', 'gi'),
                        '<span class="highlighted">$1</span>');
                }
            }
            return $sce.trustAsHtml(text ? text.replace(/\n/g, '<br />') : "");
        }
    }]).config(["$ionicConfigProvider", function ($ionicConfigProvider) {

        // note that you can also chain configs
        $ionicConfigProvider.navBar.positionPrimaryButtons('left');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.tabs.style('standard');
        $ionicConfigProvider.navBar.alignTitle('left');
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.previousTitleText('');
    }]).directive('onChange', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.onChange);
                element.on('change', onChangeHandler);
                element.on('$destroy', function () {
                    element.off();
                });

            }
        };
    });