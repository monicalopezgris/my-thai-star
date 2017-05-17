import { Request, Response, Router as eRouter } from 'express';
import bussiness from '../logic';
import * as types from '../model/interfaces';

export const router = eRouter();

router.post('/v1/Order', (req: Request, res: Response) => {
    if (req.body.invitationId === undefined) {
        res.status(400).json({ message: 'No Invitation token given' });
    } else {
        bussiness.createOrder(req.body, (err: types.IError) => {
            if (err) {
                res.status(err.code).json(err.message);
            } else {
                res.status(204).json();
            }
        });
    }
});

router.delete('/v1/Delete', (req: Request, res: Response) => {
    if (req.query.reservationToken === undefined) {
        res.status(400).json({ message: 'No Invitation token given' });
    } else {
        bussiness.cancelOrder(req.query.reservationToken, (err: types.IError) => {
            if (err) {
                res.status(err.code).json(err.message);
            } else {
                res.status(204).json();
            }
        });
    }
});
