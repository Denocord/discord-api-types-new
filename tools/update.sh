declare CURRENT_BRANCH=`git branch --show-current`

git checkout upstream-work
git pull
git checkout $CURRENT_BRANCH
git merge upstream-work -X ignore-all-space -m "🔀 upstream-work->$CURRENT_BRANCH"

echo "Would you like to reformat the code?"
read REFORMAT

if [[ $REFORMAT == "y" ]]; then
deno fmt
git add .
git commit -m "🎨 Format the updated code"
fi