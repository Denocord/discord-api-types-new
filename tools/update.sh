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
echo "Would you like to create a commit?"
read DO_COMMIT

if [[ $DO_COMMIT == "y" ]]; then
git commit -m "🎨 Format the updated code"
fi
fi