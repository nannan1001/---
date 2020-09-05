\# macOS terminal initialization script
`python3 -m venv venv` \# create a virtual environment
`source venv/bin/activate` \# activate the virtual environment
`pip install -r requirements.txt` \# install developer dependencies
\# Set environment variables
export FLASK_APP = manage.py
export FLASK_ENV = development
`flask run`

\# Windows PowerShell initialization script
`py -m venv venv` # create a virtual environment
`& venv\Scripts\activate.ps1` # activate the virtual environment
`pip install -r requirements.txt` # install developer dependencies
\# Set environment variables
$env:FLASK_APP = manage.py
$env:FLASK_ENV = development
`flask run`

\# MySQL 
`mysql.server start`
`mysql -u root -p`
`use database forum;`
`source /data/forum.sql;`
 