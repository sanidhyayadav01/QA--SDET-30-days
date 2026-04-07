pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sanidhyayadav01/QA--SDET-30-days.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('cypress-tests') {
                    bat 'npm install'
                }
            }
        }

        stage('Create Env File') {
            steps {
                dir('cypress-tests') {
                    bat 'echo {"username":"Admin","password":"admin123"} > cypress.env.json'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('cypress-tests') {
                    bat 'npm test'
                }
            }
        }

        stage('Allure Report') {
            steps {
                allure includeProperties: false, 
                       jdk: '', 
                       results: [[path: 'cypress-tests/allure-results']]
            }
        }
    }
}