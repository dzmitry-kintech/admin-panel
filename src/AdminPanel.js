import React from "react";
import {Admin, Resource} from "react-admin";
import jsonRestDataProvider from "ra-data-fakerest";
import addUploadFeature from "./addUploadFeature";
import data from "./data";
import authProvider from "./authProvider";
import i18nProvider from "./i18n/provider";
import UserIcon from '@material-ui/icons/Group';
import SubscriptionIcon from '@material-ui/icons/Redeem';
import TopicIcon from '@material-ui/icons/Book';
import QuizIcon from '@material-ui/icons/Restore';
import QuestionIcon from '@material-ui/icons/HelpOutline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AnswerIcon from '@material-ui/icons/SpeakerNotes';
import {UserList, UserCreate, UserEdit} from "./resources/users";
import {SubscriptionList, SubscriptionCreate, SubscriptionEdit} from "./resources/subscriptions";
import {TopicList, TopicCreate, TopicEdit} from "./resources/topics";
import {QuizList, QuizCreate, QuizEdit} from "./resources/quizzes";
import {QuestionList, QuestionCreate, QuestionEdit} from "./resources/questions";
import {AssessmentList, AssessmentCreate, AssessmentEdit} from "./resources/assessments";
import {AnswerList, AnswerCreate, AnswerEdit} from "./resources/answers";

const dataProvider = jsonRestDataProvider(data, true);
const uploadCapableDataProvider = addUploadFeature(dataProvider);
const delayedDataProvider = (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(uploadCapableDataProvider(type, resource, params)), 0)
    );

export const AdminPanel = () =>
(
    <Admin title="Admin Panel" dataProvider={delayedDataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
    {
        (auth) => [
            <Resource key="users" name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>,
            <Resource key="subscriptions" name="subscriptions" list={SubscriptionList} create={SubscriptionCreate} edit={SubscriptionEdit} icon={SubscriptionIcon}/>,
            <Resource key="topics" name="topics" list={TopicList} create={TopicCreate} edit={TopicEdit} icon={TopicIcon}/>,
            <Resource key="quizzes" name="quizzes" list={QuizList} create={QuizCreate} edit={QuizEdit} icon={QuizIcon}/>,
            <Resource key="questions" name="questions" list={QuestionList} create={QuestionCreate} edit={QuestionEdit} icon={QuestionIcon}/>,
            <Resource key="assessments" name="assessments" list={AssessmentList} create={AssessmentCreate} edit={AssessmentEdit} icon={AssessmentIcon}/>,
            <Resource key="answers" name="answers" list={AnswerList} create={AnswerCreate} edit={AnswerEdit} icon={AnswerIcon}/>,
        ]
    }
    </Admin>
);