# Frontend-Programming

Git information

User Authentication:

```
git config –global user.email “youremail@”
git config –global user.name “yourname”
```

Repository URL: https://github.com/shiva-palakurthy/Frontend-Programming.git

For creating a new repository

```
echo "# Frontend-Programming" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shiva-palakurthy/Frontend-Programming.git
git push -u origin main
```

To push an existing repository

```
git remote add origin https://github.com/shiva-palakurthy/Frontend-Programming.git
git branch -M main
git push -u origin main
```

To remove the existing remote

```
git remote remove origin
```

To get the origin URL

```
git config --get remote.origin.url
```

To switch to the target branch:

```
git checkout main
git checkout main <filename>
```
Commands to maintain both the origin and the local have the same version of code
```
git fetch
git merge
git pull origin main
```
To download code from the remote to the local machine
```
git clone <git-branch-url>
```
1. to merge the changes from the source branch to the current branch
2. Git command that merges a specified branch into the current branch, forcing the creation of a new merge commit even if a fast-forward merge would be possible
This merge commit acts as a record of the merge operation itself, connecting the two branches in the commit history. 
```
git merge <branch_name>
or
git merge --no-ff <branch_name>
```
