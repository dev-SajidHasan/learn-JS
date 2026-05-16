console.log("hendler-file-added");

 document.getElementById('btn-update-title')
        .addEventListener('click',function(){
            // console.log('btn-click');
            const pageTitleElements = document.getElementById('page-title')
            console.log(pageTitleElements);
            pageTitleElements.innerText = 'Updated page title'
            
        })

        document.getElementById('btn-login')
       .addEventListener('click',function(){
        const userInfoElement = document.getElementById('user-info')
        userInfoElement.innerText ='user loogged IN'
        
       })

