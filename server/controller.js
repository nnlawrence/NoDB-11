let players = [
    {
        id: 1,
        name: 'Michael Jordan',
        position: 'Guard',
        image: 'https://www.stickpng.com/assets/images/5841b075a6515b1e0ad75a72.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUiS1vpy3nF7AoB8PUeslglYaEafl7RSig-wVlAJbajPiR2fGgEQ'
    },
    {
        id: 2,
        name: 'Steph Curry',
        position: 'Guard',
        image: 'https://i-love-png.com/images/curry_png_355899.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteYYlwwYlQhM_jUiXReGUOkOqpbDZFvP2-mT8HJ0BoUzEH-XxqQ'
    },
    {
        id: 3,
        name: 'Lebron James',
        position: 'Forward',
        image: 'https://i.dlpng.com/static/png/314717_preview.png' 
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP3SH8iSRpw5r49LWj86p321cueThhbMsGw8n5q2GEHka2obJ'
    },
    {
        id: 4,
        name: 'Steve Nash',
        position: 'Guard',
        image: 'https://www.stickpng.com/assets/images/5845603892a07640e262dc40.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtACyTukJfCUipJ_0eD00FcAR2XAgcskhyJoruLImxBVVkf7Tqxw'
    },
    {
        id: 5,
        name: 'Shaquille ONeal',
        position: 'Center',
        image: 'https://i.dlpng.com/static/png/4776493-shaquille-oneal-png-92-images-in-collection-page-1-shaquille-o-neal-png-384_384_preview.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFonAtA6iRkdrySvcDrU6lpyHfZOgMIJ8z-_eMQiIMT3TqPcqHQ'
    },
    {
        id: 6,
        name: 'Kawhi Leonard',
        position: 'Forward',
        image: 'https://i.dlpng.com/static/png/5237789-kawhi-leonard-png-95-images-in-collection-page-2-kawhi-leonard-png-3840_2560_preview.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ncofTT2B8EslvHsadSnPxLLRSmaMezwF5p5k04I_ioQ4ubJdhw'
    },
    {
        id: 7,
        name: 'Kobe Bryant',
        position: 'Guard',
        image: 'https://www.stickpng.com/assets/thumbs/584564ed7c25fb418d2c2997.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1j95KI_z6JbF_U0KiMOd9yKgYYFWz0eZO6Aadzxe0BUPFsOo7A'
    },
    {
        id: 8,
        name: 'Wilt Chamberlain',
        position: 'Center',
        image: 'https://img.pngio.com/collection-of-wilt-chamberlain-png-35-images-in-collection-wilt-chamberlain-png-384_384.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjmydEYqsRJ3Ga7hE9Ypt17onU-ZlaL3S4tEvJZ8eeK7KilCQ'
    },
    {
        id: 9,
        name: 'Allen Iverson',
        position: 'Guard',
        image: 'https://img.pngio.com/allen-iverson-png-95-images-in-collection-page-2-allen-iverson-png-384_384.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IfYX5gegbdaLY3lHr24H-x52w7eHmdjoa2wKALOVAMNLnM4cKA'
    },
    {
        id: 10,
        name: 'Tim Duncan',
        position: 'Center',
        image: 'https://i.dlpng.com/static/png/5038905-download-1495-tim-duncan-nba-png-full-size-png-image-pngkit-tim-duncan-png-399_590_preview.png'
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzqA7im5PeEA_z4Azoe8TejgmzlFBwXXoqlrx_yHoJWJrEuBi'
    }    
]

let selectedPlayers = []

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    createPlayer: (req, res)=>{
        players.length? id = players[players.length - 1].id + 1
        : id = 0
        const newPlayer = {
            name: req.body.name,
            position: req.body.position,
            image: req.body.image,
            id
        }
        players.push(newPlayer)
        res.status(200).send(players)
    },
    updatePlayer: (req, res) => {
        console.log('hit updated Player', req.body)
        const {id} = req.params
        const updatedPlayer = req.body
        let myPlayer = players.findIndex(player => {
            return player.id === +id
        })

        players[myPlayer] = updatedPlayer
        console.log('hit send', players)
        res.status(200).send(players)
    },
    deletePlayer: (req, res) => {
        console.log('player')
        const {id} = req.params
        players = players.filter((players)=> players.id !== +id)
        res.status(200).send(players)
    }
}