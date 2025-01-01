#==========================
# Variables
#==========================

variable "devtools_bucket" {
  default = "devtools_bucket_for_my_corp"
}

variable "devtools_iam" {
  default = "devtools"
}

variable "shared_managed_tag" {
  default = "terraform_for_my_corp"
}

#==========================
# Bucket
#==========================

resource "aws_s3_bucket" "devtools" {
  bucket = var.devtools_bucket
  acl    = "private"
  provider = aws

  lifecycle {
    prevent_destroy = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm     = "AES256"
      }
    }
  }

  tags = {
    Name                   = var.devtools_bucket
    "Managed By Terraform" = var.shared_managed_tag
  }
}

resource "aws_s3_bucket_public_access_block" "devtools" {
  bucket = aws_s3_bucket.devtools.id

  block_public_acls   = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}


#==========================
# IAM
#==========================

resource "aws_iam_user" "devtools" {
  name = var.devtools_iam
}

resource "aws_iam_user_policy" "devtools" {
  name = var.devtools_iam
  user = aws_iam_user.devtools.name
  policy = data.aws_iam_policy_document.devtools_policy.json
}

data "aws_iam_policy_document" "devtools_policy" {
  statement {
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListBucket"
    ]
    effect = "Allow"
    resources = [
      "${aws_s3_bucket.devtools.arn}",
      "${aws_s3_bucket.devtools.arn}/*",
    ]
  }
}
