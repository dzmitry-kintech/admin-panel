export default {
    users: [
        {
            id: 1,
            email: 'test.user-1@gmail.com',
            isDeleted: true,

        },
        {
            id: 2,
            email: 'test.user-2@gmail.com',
            isDeleted: false,

        },
        {
            id: 3,
            email: 'test.user-3@gmail.com',
            isDeleted: false,
        },
    ],
    subscriptions: [
        {
            id: 1,
            ownerEmail: 'test.user-1@gmail.com',
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true
        },
        {
            id: 2,
            ownerEmail: 'test.user-2@gmail.com',
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true
        },
        {
            id: 3,
            ownerEmail: 'test.user-2@gmail.com',
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: false
        }
    ],
    topics: [
        {
            id: 1,
            title: 'Topic #1 New Year',
            content: '{data:[textBlock: {}, imageBlock: {}]}',
            coordinates: '{data:[coordinates: {x:0, y:0}]}',
            quizId: '1'
        },
        {
            id: 2,
            title: 'Topic #2 March 8',
            content: '{data:[textBlock: {}, imageBlock: {}]}',
            coordinates: '{data:[coordinates: {x:1, y:1}]}',
            quizId: '2'
        },
    ],
    quizzes: [
        {
            id: 1,
            topicId: 2,
            questionsId: '1,3',
        },
        {
            id: 2,
            topicId: 1,
            questionsId: '2',
        },
    ],
    questions: [
        {
            id: 1,
            type: 'single choice',
            question: 'When do people celebrate New Year?',
            answerIndex: 2,
            choice: ['1 December', '30 December', '31 December'],
        },
        {
            id: 2,
            type: 'yes or no',
            question: 'Does Santa Claus have a beard?',
            answerIndex: 1,
            choice: ['Yes, he does', 'No, he doesn\'t'],
        },
        {
            id: 3,
            type: 'single choice',
            question: 'Which tree is the symbol of the New Year?',
            answerIndex: 2,
            choice: ['Palm', 'Spruce', 'Oak', 'Maple'],
        }
    ],
    assessments: [
        {
            id: 1,
            userId: 1,
            quizId: 1,
            answers: [2,1,2],
        },
    ],
    answers: [
        {
            id: 1,
            userId: 1,
            quizId: 1,
            questionId: 1,
            answerIndex: 2,
            scores: 10
        },
        {
            id: 2,
            userId: 1,
            quizId: 1,
            questionId: 2,
            answerIndex: 2,
            scores: 10
        },
        {
            id: 3,
            userId: 1,
            quizId: 1,
            questionId: 3,
            answerIndex: 2,
            scores: 10
        },
    ],
};
