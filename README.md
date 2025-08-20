# Frontend-Programming
Git information

User Authentication:

git config –global user.email “youremail@”
git config –global user.name “yourname”

Repository URL: https://github.com/shiva-palakurthy/Frontend-Programming.git

For creating a new repository
echo "# Frontend-Programming" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shiva-palakurthy/Frontend-Programming.git
git push -u origin main

To push an existing repository
git remote add origin https://github.com/shiva-palakurthy/Frontend-Programming.git
git branch -M main
git push -u origin main
to make sure a user on the main branch: git checkout main.
git checkout main <filename>
git merge
git pull origin main