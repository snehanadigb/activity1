pipeline{
    agent any
        triggers {
        githubPush()
        }
    stages{
        stage('Clone'){
            steps{
                git 'https://github.com/snehanadigb/activity1.git'
            }
        }
        stage('Build')
        {
            steps{
                bat 'npm init'
 
              
            }
        }
        stage('Test')
        {
            steps{
                bat 'node Test.js'
            }
        }
        stage('Deploy')
        {
            steps{
                bat 'node Item.js'
            }
        }
    }
}
