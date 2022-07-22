use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod safecert {
    use super::*;

    pub fn setup_platform(ctx: Context<CertificatesPlatform>) -> Result<()> {
        let certificate = &mut ctx.accounts.certificate;
        certificate.ipfshash = ("").to_string();
        Ok(())
    }

    pub fn create_certificate(
        ctx: Context<CreateCertificate>,
        ipfshash: String,
        user_public_key: Pubkey
    ) -> Result<()> {
        let certificate = &mut ctx.accounts.certificate;

        if !certificate.ipfshash.trim().is_empty() {
            return err!(ErrorCode::CannotCreateCertificate);
        }

        if ipfshash.trim().is_empty() {
            return err!(ErrorCode::EmptyCertificate);
        }

        certificate.ipfshash = ipfshash;
        certificate.owner = user_public_key;

        Ok(())
    }


}


#[derive(Accounts)]
pub struct CertificatesPlatform<'info> {
    #[account(init, payer = user, space = 9000 )]
    pub certificate: Account<'info, Certificate>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateCertificate<'info> {
    #[account(mut)]
    pub certificate: Account<'info, Certificate>,
}

#[account]
#[derive(Default)]
pub struct Certificate {
    pub ipfshash: String,
    pub owner: Pubkey,
}

