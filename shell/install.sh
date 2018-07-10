set -e

export PATH=$HOME/.local/bin:$PATH
curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > $HOME/.local/bin/cc-test-reporter
chmod +x $HOME/.local/bin/cc-test-reporter
cc-test-reporter before-build
wget https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip
unzip terraform_0.11.7_linux_amd64.zip -d $HOME/.local/bin
rm terraform_0.11.7_linux_amd64.zip
npm install --global --upgrade yarn
yarn
