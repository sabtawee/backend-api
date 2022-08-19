var ResultModel = require('../models/ResultModel')

var getDate = async (req, res) => {
    try {
        let date = req.params.date
        const result = await ResultModel.sequelize.query(`SELECT * FROM scrap INNER JOIN user_name ON scrap.Emp = user_name.emp_id INNER JOIN name_master ON scrap.name = name_master.name_master WHERE Shiftto = '${date}'`)
        res.json(result[0])
    } catch (error) {
        console.log({ message: error.message })
    }
}

var getWeightComblie = async (req, res) => {
    try {
        const result = await ResultModel.sequelize.query(`SELECT scrap.Control, scrap.Name, scrap.Reel, scrap.Weight, scrap.Shiftto, hb_weights.control, hb_weights.reel, hb_weights.weight as weight_mc FROM scrap inner join hb_weights on scrap.Control = hb_weights.control and scrap.Reel = hb_weights.reel`)
        console.log(result[0])
        res.json(result[0])
    } catch (error) {
        console.log({ message: error.message })
    }
}

var insertScrap = async (req,res) => {
    try {
        let Control = req.body.Control
        let Name = req.body.Name
        let Reel = req.body.Reel
        let Size = req.body.Size
        let Line = req.body.Line
        let Shift = req.body.Shift
        let Emp = req.body.Emp
        let Weight = req.body.Weight
        let Label = req.body.Label
        let Shiftto = req.body.Shiftto
        let remark = req.body.remark
        await ResultModel.sequelize.query(`INSERT INTO scrap (Control, Name, Reel, Size, Line, Shift, Emp, Weight, Label, Shiftto, remark) 
        VALUES ('${Control}', '${Name}', '${Reel}', '${Size}', '${Line}', '${Shift}', '${Emp}', '${Weight}', '${Label}', '${Shiftto}', '${remark}');`)
        res.json({message: "success"})
    } catch (error) {
        res.json({message: error.message})
    }
}

var getDataInsertChar = async (req, res) => {
    try {
        const result = await ResultModel.sequelize.query(`SELECT sum(weight) as sumweight, Shiftto FROM scrap GROUP BY Shiftto`)
        res.json(result[0])
    } catch (error) {
        console.log({ message: error.message })
    }
}


module.exports = { getDate, getWeightComblie, insertScrap, getDataInsertChar }