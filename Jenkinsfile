pipeline{
    agent any
        triggers {
        githubPush()
        }
    stages{
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/snehanadigb/activity1.git'
            }
        }
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
        
        stage('Deploy')
        {
            steps{
                bat 'node linked_list.js'
            }
        }
    }
}
