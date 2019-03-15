//create user
//get user id
//create subscription
//get subscription id
//bind user with subscription: bind(userId, subscriptionId)



export const users = {
    __doc__: {
        a: {
            email: 'test.user-a@gmail.com',
            isDeleted: false,
            subscriptions: [
                '/subscriptions/a',
            ]
        },
        b: {
            email: 'test.user-b@gmail.com',
            isDeleted: false,
            subscriptions: [
                '/subscriptions/b',
            ]
        },
        c: {
            email: 'test.user-c@gmail.com',
            isDeleted: false,
            subscriptions: [
                '/subscriptions/c',
            ]
        },
    }
};

export const subscriptions = {
    __doc__: {
        a: {
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true
        },
        b: {
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true
        },
        c: {
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true
        }
    }
};

export const topics = {
    __doc__: {
        a: {
            title: 'Topic #1 New Year',
            content: '{data:{textBlock:{},imageBlock:{}}}',
            coordinates: '{data:{coordinates:{x:0,y:0}}}',
            quizzes: [
                '/quizzes/a',
            ]
        },
        b: {
            title: 'Topic #2 March 8',
            content: '{data:{textBlock:{},imageBlock:{}}}',
            coordinates: '{data:{coordinates:{x:0,y:0}}}',
            quizzes: [
                '/quizzes/b',
            ]
        },
        c: {
            title: 'Topic #2 The Independence Day',
            content: '{data:{textBlock:{},imageBlock:{}}}',
            coordinates: '{data:{coordinates:{x:0,y:0}}}',
            quizzes: [
                '/quizzes/c',
            ]
        },
    }
};

export const quizzes = {
    __doc__: {
        a: {
            questions: [
                '/questions/a',
                '/questions/b',
                '/questions/c',
            ],
        },
        b: {
            questions: [
                '/questions/d',
                '/questions/e',
            ]
        },
        c: {
            questions: [
                '/questions/f',
                '/questions/g',
            ],
        },
    }
};

export const questions = {
    __doc__: {
        a: {
            type: 'single choice',
            question: 'When do people celebrate New Year?',
            choice: ['1 December', '30 December', '31 December'],
            answer: 2,
        },
        b: {
            type: 'yes or no',
            question: 'Does Santa Claus have a beard?',
            choice: ['Yes, he does', 'No, he doesn\'t'],
            answer: 0,
        },
        c: {
            type: 'single choice',
            question: 'Which tree is the symbol of the New Year?',
            choice: ['Palm', 'Spruce', 'Oak', 'Maple'],
            answer: 1,
        },
        d: {
            type: 'single choice',
            question: 'What is the most popular present at this day?',
            choice: ['Flowers', 'Chocolate', 'Dress'],
            answer: 0,
        },
        e: {
            type: 'yes or no',
            question: 'Is it an International feast?',
            choice: ['Yes, it is', 'No, it isn\'t'],
            answer: 0,
        },
        f: {
            type: 'single choice',
            question: 'What is the main action people gathering for at this day?',
            choice: ['Concert', 'Parade', 'Firework'],
            answer: 1,
        },
        g: {
            type: 'yes or no',
            question: 'Do people have a day off at this day?',
            choice: ['Yes, they do', 'No, They don\'t'],
            answer: 0,
        },
    }
};

export const assessments = {
    __doc__: {
        a: {
            userId: '/users/a',
            quizId: '/quizzes/a',
            answers: [
                '/answers/a',
                '/answers/b',
                '/answers/c',
            ],
            score: 100,
            total: 3,
            right: 3,
            isFirstAttempt: true,
        },
        b: {
            userId: '/users/b',
            quizId: '/quizzes/a',
            answers: [
                '/answers/a',
                '/answers/b',
                '/answers/c',
            ],
            score: 66.6666666667, // 100 * 2 : 3
            total: 3,
            right: 2,
            isFirstAttempt: true,
        },
        c: {
            userId: '/users/c',
            quizId: '/quizzes/a',
            answers: [
                '/answers/a',
                '/answers/b',
                '/answers/c',
            ],
            score: 33.3333333333, // 100 * 1 : 3
            total: 3,
            right: 1,
            isFirstAttempt: true,
        },
    }
};

export const answers = {
    __doc__: {
        a: {
            questionId: '/questions/a',
            answer: 1,
            scores: 10
        },
        b: {
            questionId: '/questions/b',
            answer: 1,
            scores: 10
        },
        c: {
            questionId: '/questions/c',
            answer: 1,
            scores: 10
        },
    }
};

export const db = {
    __collection__: {
        users,
        subscriptions,
        topics,
        quizzes,
        questions,
        assessments,
        answers,
    }
};