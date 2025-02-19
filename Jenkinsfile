pipeline {
    agent any

    environment {
        REPO_URL = "https://github.com/YASWANTHGEDDA/node-currencyConvert.git"
    }

    stages {
        stage('Clone Repository') {
            steps {
                bat "git clone %REPO_URL% || echo Repository already exists"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "cd node-currencyConvert && npm install"
            }
        }

        stage('Run Tests') {
            steps {
                bat "cd node-currencyConvert && npm test"
            }
        }

        stage('Start Application') {
            steps {
                bat "cd node-currencyConvert && npm start"
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}