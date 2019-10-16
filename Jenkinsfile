pipeline {
    agent { label 'jenkins-slave' }
    environment {
        project = "launcher"
        ppath = "/data/packages/prod/frontend"
        purl = "http://packages.royale.com/prod/frontend"
    }
    stages {
        stage('BUILD') {
            agent { docker {
                image 'reg.royale.com/ops/xynode:10-alpine'
                label 'jenkins-slave'
                args "-v ${ppath}:/data/app"
            }}
            steps {
                script {
                    try {
                        sh 'rm -rf node_modules dist build'
                        sh 'npm install'
                        sh '''
                            dt=$(date '+%Y%m%d')
                            mkdir -p /data/app/${project}/${dt}
                            npm run build ${version}
                            cp -rf build /data/app/${project}/${dt}/
                        '''
                    } catch(err) {
                        echo 'npm build error'
                        sh '/bin/sh ansible/notify.sh "npm build error" "${JOB_NAME}" "${BUILD_NUMBER}"'
                        throw err
                    }
                }
            }
        }
        stage('PACKAGE') {
            steps {
                script {
                    try {
                        sh '''
                            workspace=$(pwd)
                            dt=$(date '+%Y%m%d')
                            cd ${ppath}/${project}/${dt}/build
                            filename="${project}-${version}-$(date '+%Y%m%d%H%M%S').zip"
                            zip -qr ${filename} *
                            mv ${filename} ../
                            cd ../
                            rm -rf build
                            cd ${workspace}/ansible
                            packageurl=${purl}/${project}/${dt}/${filename}
                            /bin/sh notify.sh "package success &PACKAGES: ${packageurl}" "${JOB_NAME}" "${BUILD_NUMBER}"
                        '''
                    } catch(err) {
                        echo 'package error'
                        sh '/bin/sh ansible/notify.sh "package error" "${JOB_NAME}" "${BUILD_NUMBER}"'
                        throw err
                    }
                }
            }
        }
    }
}
