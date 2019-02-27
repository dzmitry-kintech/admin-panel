import React from "react";

import { Admin, Resource } from "react-admin";
import jsonRestDataProvider from "ra-data-fakerest";

import addUploadFeature from "./addUploadFeature";

import data from "./data";
import authProvider from "./authProvider";
import i18nProvider from "./i18n/provider";

import UserIcon from '@material-ui/icons/Group';
import SubscriptionIcon from '@material-ui/icons/Redeem';
import { UserList, UserCreate, UserEdit } from "./users";
import { SubscriptionList, SubscriptionCreate, SubscriptionEdit } from "./subscriptions";

const dataProvider = jsonRestDataProvider(data, true);
const uploadCapableDataProvider = addUploadFeature(dataProvider);
const delayedDataProvider = (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(uploadCapableDataProvider(type, resource, params)),
            1000
        )
    );

export const AdminPanel =
    () =>
    <Admin title="Admin Panel" dataProvider={delayedDataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
        {
                (auth) => [
                    <Resource key="users" name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>,
                    <Resource key="subscriptions" name="subscriptions" list={SubscriptionList} create={SubscriptionCreate} edit={SubscriptionEdit} icon={SubscriptionIcon}/>
                ]
        }
    </Admin>
