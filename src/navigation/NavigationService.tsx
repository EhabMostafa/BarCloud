import { StackActions, CommonActions, NavigationContainerRef } from '@react-navigation/native';

let _navigator: NavigationContainerRef<ReactNavigation.RootParamList> | null;


function setTopLevelNavigator(navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList> | null) {
    _navigator = navigatorRef;
}

function navigate(routeName: string, params?: object) {
    _navigator?.dispatch(
        CommonActions.navigate(routeName, params)
    );
}

function replace(routeName: string, params?: object) {
    _navigator?.dispatch(
        StackActions.replace(routeName, params)
    );
}

function getRoute() {
    let name = _navigator?.getCurrentRoute()?.name
    return name
}

function reset(routeName: string, params?: object) {
    const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }]
    })
    _navigator?.dispatch(resetAction);
}

function goBack() {
    _navigator?.dispatch(CommonActions.goBack());
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    replace,
    reset,
    setTopLevelNavigator,
    getRoute
};
