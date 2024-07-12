function makeid(l) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            const charactersLength = characters.length;
            for (let i = 0; i < l; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const l = prompt("Enter a number.");
        if (isNaN(l) || l <= 0 || l > 1000) {
            alert("Please enter a valid number between 1 and 1000.");
        } else {
            alert(makeid(parseInt(l)));
        }