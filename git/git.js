/*
    rebase
    Cheery-pick
    Interactive Rebase (  Rebasse -i )
   
    종합선물세트
    1번문제
        1. git checkout main
        2. git cheery-pick c4

    2번문제
        rebase -i 와
        git commit --amend 활용하기 

        git rebase -i main 
        git commit --amend 
        git rebase -i main
        git branch -f main caption


    3번문제 
        git checkout main
        git cherry-pcik c2
        git checkout c1
        git branch -f main c1
        git cherry-pick c2'
        git cherry-pick c3

    4번문제
        tag 문제
        git tag v1 c2
        git tag v0 c1
        git checkout c2

    5번문제

        Git describe 형태
        git describe <ref>
        Result : <tag>_<numCommits>_g<hash>

        
    9천번넘는 rebase 
    1번 문제 노가다문제!
            or rebase 인자값  고정값 가져올값.

     
            git rebase main bugFix
            git rebase bugFix side
            git rebase sdie another
            git branch -f main another

    2번 문제 다수부모
         git branch -f bugWork HEAD~^2^


    3번 브랜치 스파게티

        git checkout one
        git chreey-pick c4 c3 c2
        git checkout two
        git chreey-pick c5 c4 c3 c2
        git branch -f three c2



*/